var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

function TransitHome (props) {
    //presentation component
    return (
        <div className="jumbotron col-sm-12 text-center">
            <h1> Transit Fight </h1>
            <Link to="routeOne">
                <button type="button" className="btn btn-lg btn-success">
                    Get Started
                </button>
            </Link>
        </div>
    )
}

module.exports = TransitHome;