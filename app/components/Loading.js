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
            <div>{this.props.text}</div>
        )
    }
});

module.exports = Loading;
