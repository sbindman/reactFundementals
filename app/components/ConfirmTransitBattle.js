var React = require('react');
var styles = require('../styles');
var Link = require('react-router').Link;
var TransitDetails = require('../components/TransitDetails');
var TransitDetailsWrapper = require('../components/TransitDetailsWrapper');
var Loading = require('../components/Loading');

function puke (object) {
    return <pre>{JSON.stringify(object, null, '')}</pre>
}

function ConfirmTransitBattle(props) {
    return  props.isLoading === true
        ? <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={styles.transparentBg}>
            <Loading/>
        </div>

        :
        <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={styles.transparentBg}>
            <h1>Transit Battle</h1>
            <TransitDetailsWrapper header='1st Route'>
                <TransitDetails routes={props.routesDetails[0]} mapID="map1"/>
            </TransitDetailsWrapper>
            <TransitDetailsWrapper header="2nd Route">
                <TransitDetails routes={props.routesDetails[1]} mapID="map2"/>
            </TransitDetailsWrapper>

            <div className='col-sm-12'>
                <button type='button' style={{margin:'20px'}} className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>Initiate Battle!</button>
                <Link to='/routeOne'>
                    <button type='button' style={{margin:'20px'}} className='btn btn-lg btn-danger'>Reselect Routes</button>
                </Link>
            </div>


        </div>

}

ConfirmTransitBattle.propTypes = {
    isLoading : React.PropTypes.bool.isRequired,
    routesDetails: React.PropTypes.array.isRequired,
    onInitiateBattle: React.PropTypes.func.isRequired
};


module.exports = ConfirmTransitBattle;