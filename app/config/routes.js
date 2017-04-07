var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var TransitHomeContainer = require("../containers/TransitHomeContainer");
var RouteSelectContainer = require("../containers/RouteSelectContainer");

var ConfirmTransitBattleContainer = require("../containers/ConfirmTransitBattleContainer");
var TransitResultsContainer = require("../containers/TransitResultsContainer");




var routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            {/*default sub route*/}
            <IndexRoute component={TransitHomeContainer} />
            <Route path='/routeOne' header='1st Route' component={RouteSelectContainer}/>
            <Route path='/routeTwo/:routeOne' header='2nd Route' component={RouteSelectContainer}/>
            <Route path='/battle' component={ConfirmTransitBattleContainer}/>
            <Route path='/results' component={TransitResultsContainer}/>

        </Route>
    </Router>
);

module.exports = routes;