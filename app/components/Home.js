var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
    render: function () {
        return (
            <div>
            <h1> Github Battle </h1>
            <p>Fancy motto </p>
                <Link to="playerOne">
                    <button>Get Started</button>
                </Link>
            </div>
        )
    }
});

module.exports = Home;