var axios = require('axios');


function getRouteDetails (routeId) {
    return axios.get('https://transit.land/api/v1/routes?onestop_id='+routeId+'&&include_geometry=true')
        .then (function(details) {
            //add stop count
            details.data.routes[0].stopCount = details.data.routes[0].stops_served_by_route.length;
            return (
                details.data.routes[0]
            )
        });
}

function getOrderedRoutes() {
    return axios.get('https://transit.land/api/v1/routes?operated_by=o-9q8y-sfmta&&total=true&&include_geometry=false&&per_page=100')
        .then(function(resp) {
            resp.data.routes.sort(function(a, b) {
                return (a.name) - (b.name);
            });

            return resp.data.routes;
        })
}


function calcRouteLength(coordinates) {

    var linestring = {
        "type": "Feature",
        "geometry": {
            "type": "LineString",
            "coordinates": coordinates
        }
    }

    return turf.lineDistance(linestring);

}

function calculateScores(routes) {
    routes.forEach(function(r) {
        var rLength = Math.round(calcRouteLength(r.geometry.coordinates[0]));
        var lengthScore = rLength * 3;
        var stopScore = lengthScore/rLength * 3;
        var wheelchairScore = (r.wheelchair_accessible == 'true' || r.wheelchair_accessible == true) ? 5 : 0;
        var bikeScore = (r.bikes_allowed == true || r.bikes_allowed == 'true') ? 5 : 0;
        var vehicleScore = r.vehicle_type == 'bus' ? -5 : 0;
        //update score
        r.score = lengthScore + stopScore + wheelchairScore + bikeScore + vehicleScore;
    });
    return [
        routes[0].score,
        routes[1].score,
    ]
}


var helpers = {

    getRoutes: function() {
        return getOrderedRoutes();
    },
    getAllRoutes: function(routes) {
      return axios.all([getRouteDetails(routes[0]), getRouteDetails(routes[1])])
          .then(function(resp) {
              return resp;
          })
          .catch(function(err) {
              console.warn('Error in getAllRoutes:' + err);
          })

    },
    battle: function(routes) {
        var routeOne = getRouteDetails(routes[0]);
        var routeTwo = getRouteDetails(routes[1]);

        return axios.all([routeOne, routeTwo])
            .then(calculateScores)
            .catch(function(err) {
                console.warn('Error in battle:' + err);
            })

    },
    addMaps(mapsCoordinates) {

    mapboxgl.accessToken = 'pk.eyJ1Ijoic2JpbmRtYW4iLCJhIjoiaENWQnlrVSJ9.0DQyCLWgA0j8yBpmvt3bGA';
    var map1 = new mapboxgl.Map({
        container: 'map1', // container id
        style: 'mapbox://styles/mapbox/streets-v9' //stylesheet location
    });
    var map2 = new mapboxgl.Map({
        container: 'map2', // container id
        style: 'mapbox://styles/mapbox/streets-v9' //stylesheet location
    });


    map1.on('load', function () {

        map1.addLayer({
            "id": "route1",
            "type": "line",
            "source": {
                "type": "geojson",
                "data": {
                    "type": "Feature",
                    "properties": {},
                    "geometry": {
                        "type": "LineString",
                        "coordinates": mapsCoordinates[0]
                    }
                }
            },
            "layout": {
                "line-join": "round",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#888",
                "line-width": 8
            }
        });

        var bounds = mapsCoordinates[0].reduce(function(bounds, coord) {
            return bounds.extend(coord);
        }, new mapboxgl.LngLatBounds(mapsCoordinates[0][0], mapsCoordinates[0][0]));

        map1.fitBounds(bounds, {
            padding: 20
        });
    });

    map2.on('load', function () {

        map2.addLayer({
            "id": "route1",
            "type": "line",
            "source": {
                "type": "geojson",
                "data": {
                    "type": "Feature",
                    "properties": {},
                    "geometry": {
                        "type": "LineString",
                        "coordinates": mapsCoordinates[1]
                    }
                }
            },
            "layout": {
                "line-join": "round",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#888",
                "line-width": 8
            }
        });

        var bounds = mapsCoordinates[1].reduce(function(bounds, coord) {
            return bounds.extend(coord);
        }, new mapboxgl.LngLatBounds(mapsCoordinates[1][0], mapsCoordinates[1][0]));

        map2.fitBounds(bounds, {
            padding: 20
        });
    });


}

}

module.exports = helpers;