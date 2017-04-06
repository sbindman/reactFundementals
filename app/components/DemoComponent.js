var React = require('react');
var PropTypes = React.PropTypes;

function DemoComponent (props) {
    //presentation component
    return (
    <div> Demo </div>
    )
}

//required props
DemoComponent.propTypes = {
    item : React.PropTypes.string.isRequired,
}

module.exports = DemoComponent;