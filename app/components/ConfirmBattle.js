var React = require('react');
var styles = require('../styles');
var Link = require('react-router').Link;
var UserDetails = require('../components/UserDetails');
var UserDetailsWrapper = require('../components/UserDetailsWrapper');
var Loading = require('../components/Loading');

function puke (object) {
    return <pre>{JSON.stringify(object, null, '')}</pre>
}

function ConfirmBattle(props) {
    return  props.isLoading === true
        ? <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={styles.transparentBg}>
            <Loading/>
        </div>

        :
            <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={styles.transparentBg}>
                <h1>BATTLE</h1>
                <UserDetailsWrapper header='Player 1'>
                    <UserDetails info={props.playersInfo[0]}/>
                </UserDetailsWrapper>
                <UserDetailsWrapper header="player 2">
                    <UserDetails info={props.playersInfo[1]}/>
                </UserDetailsWrapper>

                <div className='col-sm-12'>
                    <button type='button' className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>Initiate Battle!</button>
                </div>

                <div className='col-sm-12'>
                    <Link to='/playerOne'>
                        <button type='button' className='btn btn-lg btn-danger'>Reselect Players</button>
                    </Link>
                </div>
        </div>

}

ConfirmBattle.propTypes = {
    isLoading : React.PropTypes.bool.isRequired,
    playersInfo: React.PropTypes.array.isRequired,
    onInitiateBattle: React.PropTypes.func.isRequired
};


module.exports = ConfirmBattle;