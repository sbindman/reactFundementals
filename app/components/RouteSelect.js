var React = require('react');

function RouteSelect (props) {
    //presentation component
    return (
        <div className="jumbotron col-sm-12 text-center">
            <h3>{props.header}</h3>
            <div className="form-group">
                <select className="form-control text-center" style={{width:'50%', margin: '20px', display:'inline-block'}} onChange={props.onChange} value={props.selectedRoute} >
                    <option>Select a transit route</option>
                    {props.selection}
                </select>
                <div className="form-group" style={{display:'inline'}}>
                    <button onClick={props.onClick}
                            className="btn btn-success" type="submit" >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    )
}

//required props
RouteSelect.propTypes = {
    header : React.PropTypes.string.isRequired,
    selection : React.PropTypes.array.isRequired,
    onClick : React.PropTypes.func.isRequired,
    onChange : React.PropTypes.func.isRequired,
    selectedRoute: React.PropTypes.string.isRequired
}

module.exports = RouteSelect;