import * as actionTypes from '../actions/types';

const initialState = {
    allPlayers: []
};

const participatedPlayersReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_PARTICIPATED_PLAYERS_LIST:
            return {
                ...state,
                allPlayers: action.payload
            };

        default:
            return state;
    }
};

export default participatedPlayersReducer;
