var React = require('react');
var transitLandHelper = require('../utils/transitLandHelper');
var ConfirmTransitBattle = require('../components/ConfirmTransitBattle');

var ConfirmTransitBattleContainer = React.createClass({
    //allows for passing context specific data (promptContainer) without having to go through props
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function() {
        return {
            isLoading : true,
            routes : []
        }
    },
    componentDidMount : function() {
        //add async code
        //get variables from route
        var query = this.props.location.query;

        var that = this;
        //get info from github and update state
        transitLandHelper.getAllRoutes([query.routeOne, query.routeTwo])
            .then(function(resp) {
                that.setState({
                    isLoading : false,
                    routes: resp
                });

                //once get data back, then load map
                //load mapbox
                transitLandHelper.addMaps(
                    [
                    that.state.routes[0].geometry.coordinates[0],
                    that.state.routes[1].geometry.coordinates[0]
                    ]
                )
            });

    },
    handleInitiateBattle: function() {
        this.context.router.push({
            pathname: '/results',
            state : {
                routes: this.state.routes
            }
        });
    },
    render : function() {
        return (
            <div>
                <ConfirmTransitBattle
                    routesDetails={this.state.routes}
                    isLoading={this.state.isLoading}
                    onInitiateBattle={this.handleInitiateBattle}
                />
            </div>
        )
    }
});


module.exports = ConfirmTransitBattleContainer;
