import {combineReducers} from 'redux';
import gameRoundOfFiveReducer from "./gameRoundOfFive";
import participatedPlayersReducer from "./participatedPlayers";

const rootReducer = combineReducers({
    gameRoundOfFive: gameRoundOfFiveReducer,
    participatedPlayers: participatedPlayersReducer
});

export default rootReducer;
