import styles from '../styles/Home.module.css';
import Link from 'next/link'
import {connect} from 'react-redux';
import {getParticipatedPlayersList} from "../utils/selectors";
import React from "react";
import {maskAnID} from "../utils/helpers";


const PlayersScore = ({participatedPlayers}) => {
    return (
        <div className={styles.container + ' ' + 'large-screen'}>
            <main className={styles.main}>
                <div key={1}>
                    <div className="heading">
                        <h1 className="title">👥 Players score</h1>
                    </div>
                </div>
                <div className="table-wrapper">
                    <table className="table-responsive card-list-table">
                        <thead>
                        <tr key={0}>
                            <th>Player Name</th>
                            <th>Player ID</th>
                            <th>All time Score</th>
                        </tr>
                        </thead>
                        <tbody>
                        {participatedPlayers.length > 0 ? (
                            participatedPlayers.sort((a, b) => (a.score < b.score) ? 1 : -1).map((player, i) => {
                                return <tr key={i + 1}>
                                    <td data-title="Column #1">{player.hasOwnProperty('X') ? player.X : player.O}</td>
                                    <td data-title="Column #2">{maskAnID(player.id)}</td>
                                    <td data-title="Column #3">{player.score}</td>
                                </tr>
                            })
                        ) : (
                            <tr>
                                <td colSpan={3}>
                                    <p className="game-intro">No results found for<strong> participated
                                        players.</strong></p>
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
                <h1><Link href="/play"><p style={{cursor: 'pointer'}}>Play &rarr;</p></Link></h1>
            </main>
        </div>
    )
}

const mapStateToProps = (state) => ({
    participatedPlayers: getParticipatedPlayersList(state)
})

export default connect(mapStateToProps, null)(PlayersScore);
