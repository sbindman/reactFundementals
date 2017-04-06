var React = require('react');
var Results = require('../components/Results');
var githubHelpers = require('../utils/githubHelpers');

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
        githubHelpers.battle(this.props.location.state.playersInfo)
            .then(function (scores) {
                that.setState({
                    scores: scores,
                    isLoading : false
                })
            })
    },
    render : function() {
        return (
        //add presentation items ()
        <Results isLoading={this.state.isLoading} scores={this.state.scores} playersInfo={this.props.location.state.playersInfo}/>
            )
    }
});

module.exports = ResultsContainer;
