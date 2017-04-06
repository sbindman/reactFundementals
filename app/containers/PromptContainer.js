var React = require('react');
var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({
    //allows for passing context specific data (promptContainer) without having to go through props
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function() {
        return {
            username: ""
        }
    },
    handleUpdateUser : function(e) {
        this.setState({
            username: e.target.value
        });
    },
    handleSubmitUser : function(e) {
        e.preventDefault();
        this.setState({
            username: ''
        });
        if (this.props.routeParams.playerOne) {
            //otherwise go to battle
            this.context.router.push({
                pathname: '/battle',
                query : {
                    playerOne: this.props.routeParams.playerOne,
                    playerTwo: this.state.username
                }
            });
            //    if player 1 is NOT a param go to player 2
        }
        else {
            //updated route
            this.context.router.push('/playerTwo/'+ this.state.username);
        }
    },
    render: function() {
        return (
            <Prompt
                onSubmitUser={this.handleSubmitUser}
                onUpdateUser={this.handleUpdateUser}
                header={this.props.route.header}
                username={this.state.username}
            />
        )
    }
});


module.exports = PromptContainer;