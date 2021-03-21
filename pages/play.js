import PlayersName from "../components/PlayersName";
import {v4 as uuidv4} from 'uuid';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {processChangingGameRoundOfFiveInfo} from "../actions/gameRoundOfFive";
import {redirectToURL} from "../utils/helpers";


const Play = ({processChangingGameRoundOfFiveInfo}) => {

    const proceedToPlay = (names) => {
        const data = {
            isGoingOn: true,
            joinedPlayers: [{id: uuidv4(), X: names.X, score: 0}, {id: uuidv4(), O: names.O, score: 0}],
            numberOfRoundsPlayed: 0
        }

        processChangingGameRoundOfFiveInfo(data)
            .then(() => redirectToURL('/game'))
            .catch(err => console.log(err))
    }

    return (
        <div className="box">
            <h2>Enter players name</h2>
            <PlayersName proceedToPlay={proceedToPlay}/>
        </div>
    )
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            processChangingGameRoundOfFiveInfo
        },
        dispatch
    )

export default connect(null, mapDispatchToProps)(Play);
