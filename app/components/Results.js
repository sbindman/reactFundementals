var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var Link = require('react-router').Link;
var UserDetails = require('../components/UserDetails');
var UserDetailsWrapper = require('../components/UserDetailsWrapper');
var Loading = require('../components/Loading')

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
            <UserDetailsWrapper header={props.scores[0] > props.scores[1] ? 'Winner' : 'Loser' }>
                <UserDetails info={props.playersInfo[0]} scores={props.scores[0]}/>
            </UserDetailsWrapper>
            <UserDetailsWrapper header={props.scores[1] > props.scores[0] ? 'Winner' : 'Loser' } >
                <UserDetails info={props.playersInfo[1]} scores={props.scores[1]}/>
            </UserDetailsWrapper>

            <div className='col-sm-12'>
                <Link to='/playerOne'>
                    <button type='button' className='btn btn-lg btn-danger'>Reselect Players</button>
                </Link>
            </div>
        </div>

}

//required props
Results.propTypes = {
    isLoading : React.PropTypes.bool.isRequired,
    scores: React.PropTypes.array.isRequired,
    playersInfo : React.PropTypes.array.isRequired
}

module.exports = Results;