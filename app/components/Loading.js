var React = require('react');

function puke (object) {
    return <pre>{JSON.stringify(object, null, '')}</pre>
}

var Loading = React.createClass({
    propTypes: {
        text: React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            text: 'Loading'
        }
    },
    render : function() {
        return (
            <h1 className="jumbotron col-sm-12 text-center">{this.props.text}</h1>
        )
    }
});

module.exports = Loading;
