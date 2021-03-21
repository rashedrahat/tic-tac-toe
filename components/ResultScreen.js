import React from 'react';

const ResultScreen = ({result}) => (
    <>
        {result[0].score === result[1].score ? (
            <div key={1}>
                <div className="heading">
                    <h1 className="title">Draw</h1>
                    <div className="score-container">{result[0].score}</div>
                </div>
                <p className="game-intro">Scores are level!<strong> Nobody wins.</strong></p>
            </div>
        ) : [result[0].score > result[1].score ? (
            <div key={2}>
                <div className="heading">
                    <h1 className="title">Winner<sup>🏆</sup></h1>
                    <div className="score-container">{result[0].score}</div>
                </div>
                <p className="game-intro">Congratulations!<strong> {result[0].X }</strong></p>
            </div>
        ) : (
            <div key={3}>
                <div className="heading">
                    <h1 className="title">Winner<sup>🏆</sup></h1>
                    <div className="score-container">{result[1].score}</div>
                </div>
                <p className="game-intro">Congratulations!<strong> {result[1].O }</strong></p>
            </div>
        )]}
    </>
);

export default ResultScreen;
