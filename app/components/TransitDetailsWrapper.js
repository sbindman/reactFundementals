var React = require('react');
var PropTypes = React.PropTypes;

function TransitDetailsWrapper (props) {
    return (
        <div className='col-sm-6'>
            <p className='lead'>{props.header}</p>
            {props.children}
        </div>
    )
}

TransitDetailsWrapper.propTypes = {
    header : React.PropTypes.string.isRequired,
}

module.exports = TransitDetailsWrapper;