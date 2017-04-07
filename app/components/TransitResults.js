var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var Link = require('react-router').Link;
var TransitDetails = require('../components/TransitDetails');
var TransitDetailsWrapper = require('../components/TransitDetailsWrapper');
var Loading = require('../components/Loading');

function puke (object) {
    return <pre>{JSON.stringify(object, null, '')}</pre>
}

function Results (props) {
    return  props.isLoading === true
        ? <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={styles.transparentBg}>
            <Loading/>
        </div>

        :
        <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={styles.transparentBg}>
            <h1>Results</h1>
            <TransitDetailsWrapper header={props.scores[0] > props.scores[1] ? 'Winner' : 'Loser' }>
                <TransitDetails routes={props.routeDetails[0]} score={props.scores[0]} mapID="map1"/>
            </TransitDetailsWrapper>
            <TransitDetailsWrapper header={props.scores[1] > props.scores[0] ? 'Winner' : 'Loser' } >
                <TransitDetails routes={props.routeDetails[1]} score={props.scores[1]} mapID="map2"/>
            </TransitDetailsWrapper>

            <div className='col-sm-12'>
                <Link to='/routeOne'>
                    <button type='button' style={{margin:'20px'}} className='btn btn-lg btn-danger'>Reselect Routes</button>
                </Link>
            </div>
        </div>

}

//required props
Results.propTypes = {
    isLoading : React.PropTypes.bool.isRequired,
    scores: React.PropTypes.array.isRequired,
    routeDetails : React.PropTypes.array.isRequired
}

module.exports = Results;