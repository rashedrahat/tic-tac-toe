import React, {useState, useEffect} from 'react';
import Board from '../components/Board';
import {addPlayersToTheParticipantList, calculateWinner, redirectToURL} from "../utils/helpers";
import {getGameRoundOfFiveInfo, getParticipatedPlayersList} from "../utils/selectors";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {processChangingGameRoundOfFiveInfo} from "../actions/gameRoundOfFive";
import {processChangingParticipatedPlayersList} from "../actions/participatedPlayers";

const Game = ({gameRoundOfFiveInfo, participatedPlayers, processChangingGameRoundOfFiveInfo, processChangingParticipatedPlayersList}) => {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const [numOfMatchPlayed, setNumOfMatchPlayed] = useState(0);
    const winner = calculateWinner(board);

    useEffect(() => {
        const {isGoingOn, numberOfRoundsPlayed} = gameRoundOfFiveInfo;
        if (!isGoingOn && numberOfRoundsPlayed === 0) redirectToURL('/play');
    }, [])

    useEffect(() => {
        if (!board.includes(null) || winner) {
            if (winner) {
                processTheResultAfterEachGame(winner)
            } else {
                processTheResultAfterEachGame('Draw')
            }
        }
    }, [board, winner])

    const handleClick = (i) => {
        const boardCopy = [...board];
        if (winner || boardCopy[i]) return;
        boardCopy[i] = xIsNext ? "X" : "O";
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    };

    const takeCareTheResult = (result) => {
        let {joinedPlayers} = gameRoundOfFiveInfo;
        if (['X', 'O'].includes(result)) {
            for (let i = 0; i < joinedPlayers.length; i++) {
                if (joinedPlayers[i].hasOwnProperty(result)) {
                    const objIndex = joinedPlayers.findIndex((obj => obj.id == joinedPlayers[i].id));
                    joinedPlayers[objIndex].score += 2;
                    joinedPlayers[objIndex === 0 ? objIndex + 1 : objIndex - 1].score += 1;
                    break;
                }
            }
        }

        return joinedPlayers;
    }

    const processTheResultAfterEachGame = (result) => {
        let {isGoingOn, numberOfRoundsPlayed} = gameRoundOfFiveInfo;
        if (numberOfRoundsPlayed === 4) {
            numberOfRoundsPlayed += 1;
            isGoingOn = false;
            const joinedPlayers = takeCareTheResult(result)
            processChangingGameRoundOfFiveInfo({isGoingOn, joinedPlayers, numberOfRoundsPlayed})
                .then(res => {
                    setNumOfMatchPlayed(res.data.numberOfRoundsPlayed)
                    const players = res.data.joinedPlayers;
                    let tempParticipatedPlayers = participatedPlayers
                    players.map((player, index) => {
                        const updatedParticipatedPlayers = addPlayersToTheParticipantList(tempParticipatedPlayers, player);
                        tempParticipatedPlayers = updatedParticipatedPlayers
                        if (index === players.length - 1) {
                            processChangingParticipatedPlayersList(tempParticipatedPlayers)
                                .then(() => {
                                    redirectToURL('/game-result')
                            }).catch(err => console.log(err))
                        }
                    })
                })
                .catch(err => console.log(err))
        } else {
            numberOfRoundsPlayed += 1;
            const joinedPlayers = takeCareTheResult(result)
            processChangingGameRoundOfFiveInfo({isGoingOn, joinedPlayers, numberOfRoundsPlayed})
                .then(res => setNumOfMatchPlayed(res.data.numberOfRoundsPlayed))
                .catch(err => console.log(err))
        }
    }

    const renderMoves = () => (
        <button type="button" onClick={() => setBoard(Array(9).fill(null))}>
            Reset
        </button>
    )

    return (
        <div align="center" className="div-wrapper">
            <Board squares={board} onClick={handleClick}/>
            <div>
                <b>
                    {winner ? "🏆 Winner: " + winner : [board.includes(null) ? "Next Player: " + (xIsNext ? "X" : "O") : "Draw"]}
                </b>
            </div>
            <div style={{padding: "5px"}}>{renderMoves()}</div>
            <div>
                <p>
                    Match played {numOfMatchPlayed} out of 5
                </p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    gameRoundOfFiveInfo: getGameRoundOfFiveInfo(state),
    participatedPlayers: getParticipatedPlayersList(state)
})

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            processChangingGameRoundOfFiveInfo,
            processChangingParticipatedPlayersList
        },
        dispatch
    )

export default connect(mapStateToProps, mapDispatchToProps)(Game);
