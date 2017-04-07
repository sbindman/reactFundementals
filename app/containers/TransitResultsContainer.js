var React = require('react');
var TransitResults = require('../components/TransitResults');
var transitLandHelper = require('../utils/transitLandHelper');

var ResultsContainer = React.createClass({
    getInitialState: function() {
        return {
            isLoading: true,
            scores : []
        }
    },
    componentDidMount : function() {
        //add async code
        var that = this;
        //array of both routes ids
        var routeArray = [this.props.location.state.routes[0].onestop_id, this.props.location.state.routes[1].onestop_id];
        transitLandHelper.battle(routeArray)
            .then(function (scores) {
                that.setState({
                    scores: scores,
                    isLoading : false
                })

                transitLandHelper.addMaps(
                    [
                        that.props.location.state.routes[0].geometry.coordinates[0],
                        that.props.location.state.routes[1].geometry.coordinates[0]
                    ]
                )
            })
    },
    render : function() {
        return (
            //add presentation items ()
            <TransitResults
                isLoading={this.state.isLoading}
                scores={this.state.scores}
                routeDetails={this.props.location.state.routes}
            />
        )
    }
});

module.exports = ResultsContainer;
