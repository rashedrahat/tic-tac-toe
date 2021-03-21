import styles from '../styles/Home.module.css';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {processChangingGameRoundOfFiveInfo} from "../actions/gameRoundOfFive";
import {redirectToURL} from "../utils/helpers";
import {getGameRoundOfFiveInfo} from "../utils/selectors";
import {useState, useEffect} from "react";
import ResultScreen from "../components/ResultScreen";


const GameResult = ({gameRoundOfFiveInfo, processChangingGameRoundOfFiveInfo}) => {

    const [showResultScreen, setShowResultScreen] = useState(false)

    useEffect(() => {
        const {isGoingOn, numberOfRoundsPlayed} = gameRoundOfFiveInfo;
        if (!isGoingOn && numberOfRoundsPlayed === 5) {
            setShowResultScreen(true)
        } else {
            redirectToURL('/play')
        }
    }, [])

    const proceedUserChoice = (choice) => {
        const toBeUpdated = { score: 0 }
        const joinedPlayer1 = gameRoundOfFiveInfo.joinedPlayers[0]
        const joinedPlayer2 = gameRoundOfFiveInfo.joinedPlayers[1]
        const updatedJoinedPlayer1 = { ...joinedPlayer1,  ...toBeUpdated }
        const updatedJoinedPlayer2 = { ...joinedPlayer2,  ...toBeUpdated }
        const data = {
            isGoingOn: true,
            joinedPlayers: [updatedJoinedPlayer1, updatedJoinedPlayer2],
            numberOfRoundsPlayed: 0
        }

        processChangingGameRoundOfFiveInfo(data)
            .then(() => redirectToURL(choice === 'try-again' ? '/game' : '/'))
            .catch(err => console.log(err))
    }

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                {showResultScreen && <ResultScreen result={gameRoundOfFiveInfo.joinedPlayers}/>}
                <div className={styles.grid}>
                    <a className={styles.card} onClick={() => proceedUserChoice('try-again')}>
                        <h3>Try again &rarr;</h3>
                    </a>

                    <a className={styles.card} onClick={() => proceedUserChoice('exit')}>
                        <h3>Exit &rarr;</h3>
                    </a>
                </div>
            </main>
        </div>
    )
}

const mapStateToProps = (state) => ({
    gameRoundOfFiveInfo: getGameRoundOfFiveInfo(state)
})

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            processChangingGameRoundOfFiveInfo
        },
        dispatch
    )

export default connect(mapStateToProps, mapDispatchToProps)(GameResult);
