import * as actionTypes from './types';

export const changeGameRoundOfFiveInfo = (payload) => ({type: actionTypes.CHANGE_GAME_ROUND_OF_FIVE_INFO, payload});

export const processChangingGameRoundOfFiveInfo = (data) => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
        try {
            dispatch(changeGameRoundOfFiveInfo(data));
            const {gameRoundOfFive} = getState();
            resolve({success: true, data: gameRoundOfFive});
        } catch (e) {
            console.log(e);
            reject({success: false});
        }
    })
};
