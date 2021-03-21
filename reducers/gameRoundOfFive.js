import * as actionTypes from '../actions/types';

const initialState = {
    isGoingOn: false,
    joinedPlayers: [],
    numberOfRoundsPlayed: 0
};

const gameRoundOfFiveReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_GAME_ROUND_OF_FIVE_INFO:
            return action.payload;

        default:
            return state;
    }
};

export default gameRoundOfFiveReducer;
