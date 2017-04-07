var React = require('react');
var TransitHome = require('../components/TransitHome');

var TransitHomeContainer = React.createClass({
    //allows for passing context specific data (promptContainer) without having to go through props
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function() {
        return {
        }
    },
    componentDidMount : function() {
        //add async code
    },
    render : function() {
        return (
            <TransitHome/>
        )
    }
});

module.exports = TransitHomeContainer;
