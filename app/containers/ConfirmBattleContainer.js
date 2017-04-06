var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
    //allows for passing context specific data (promptContainer) without having to go through props
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function() {
        return {
            isLoading: true,
            playersInfo: []
        }
    },
    componentDidMount : function() {
      var query = this.props.location.query;
      var that = this;
      //get info from github and update state
      githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
          .then(function(resp) {
              that.setState({
                  isLoading : false,
                  playersInfo: resp
              })
          });

    },
    handleInitiateBattle: function() {
        this.context.router.push({
            pathname: '/results',
            state : {
                playersInfo: this.state.playersInfo
            }
        });
    },
    render : function() {
        return (
            <ConfirmBattle
                isLoading={this.state.isLoading}
                playersInfo={this.state.playersInfo}
                onInitiateBattle={this.handleInitiateBattle}
            />
        )
    }
});

module.exports = ConfirmBattleContainer;
