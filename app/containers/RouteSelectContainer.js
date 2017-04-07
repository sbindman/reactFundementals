var React = require('react');
var transitLandHelper = require('../utils/transitLandHelper');
var RouteSelect = require('../components/RouteSelect');
var Loading = require('../components/Loading');

var RouteSelectContainer = React.createClass({
    //allows for passing context specific data (promptContainer) without having to go through props
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function () {
        return {
            routes: [],
            isLoading: true,
            selectedRoute: ''
        }
    },
    componentDidMount: function () {
        //add async code
        var that = this;
        transitLandHelper.getRoutes()
            .then(function (resp) {
                var routes = resp.map(function (route) {
                    return {
                        name: route.name,
                        onestop_id: route.onestop_id
                    }
                });

                that.setState({
                    routes: routes,
                    isLoading: false
                });
            });
    },
    handleRouteChange: function(e) {
        var value = e.target.value;
        this.setState({
            selectedRoute: value
        })
    },
    handleSubmitRoute: function (e) {
        e.preventDefault();

        //if route 2 has been selected, grab details of both routes
        if (this.props.routeParams.routeOne) {
            //otherwise go to battle
            this.context.router.push({
                pathname: '/battle',
                query : {
                    routeOne: this.props.routeParams.routeOne,
                    routeTwo: this.state.selectedRoute
                }
            });
        }
        else {
            //if only the first route has been selected go to route 2
            this.context.router.push('/routeTwo/'+ this.state.selectedRoute);
        }

        //clear state for next prompt
        this.setState ({
            selectedRoute: ''
        });



    },
    render: function () {
        var selection = this.state.routes.map(function (r,i) {
            return (
                <option key={i} value={r.onestop_id}>{r.name}</option>
            );
        });

        return this.state.isLoading === true
            ? <Loading/>

            :

            <RouteSelect header={this.props.route.header}
                         onChange={this.handleRouteChange}
                         onClick={this.handleSubmitRoute}
                         selection={selection}
                         selectedRoute={this.state.selectedRoute}
            />
    }
});

module.exports = RouteSelectContainer;
