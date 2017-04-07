var React = require('react');
var PropTypes = React.PropTypes;

function TransitDetails (props) {
    return (
        <div>
            {props.score && <li className="list-group-item"><h3>Score: {props.score}</h3></li>}
            <li className="list-group-item" style={{height:'200px', padding:0}}><div id={props.mapID}></div></li>
            {props.routes.name && <li className="list-group-item">Name: {props.routes.name}</li>}
            {props.routes.operated_by_name && <li className="list-group-item">Operator: {props.routes.operated_by_name}</li>}
            {props.routes.tags.route_long_name && <li className="list-group-item">Full Name: {props.routes.tags.route_long_name}</li>}
            {props.routes.vehicle_type && <li className="list-group-item">Vehicle Type: {props.routes.vehicle_type}</li>}
            {props.routes.color && <li className="list-group-item">Route Color: {props.routes.color}</li>}
            {props.routes.stopCount && <li className="list-group-item">Total Route Stops: {props.routes.stopCount}</li>}
            {props.routes.wheelchair_accessible && <li className="list-group-item">Wheelchair Accessible: {props.routes.wheelchair_accessible}</li>}
            {props.routes.bikes_allowed && <li className="list-group-item">Bikes Allowed: {props.routes.bikes_allowed}</li>}
        </div>
    )
}

TransitDetails.propTypes = {
    score: PropTypes.number,
    mapID: PropTypes.string.isRequired,
    routes: PropTypes.shape({
        name: PropTypes.string.isRequired,
        operated_by_name: PropTypes.string,
        vehicle_type: PropTypes.string,
        color: PropTypes.string,
        stops_served_by_route: PropTypes.array,
        wheelchair_accessible: PropTypes.string,
        bikes_allowed: PropTypes.string,
    })
}

module.exports = TransitDetails;