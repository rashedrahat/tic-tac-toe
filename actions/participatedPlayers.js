import * as actionTypes from './types';

export const changeParticipatedPlayersList = (payload) => ({ type: actionTypes.CHANGE_PARTICIPATED_PLAYERS_LIST, payload });

export const processChangingParticipatedPlayersList = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        try {
            dispatch(changeParticipatedPlayersList(data));
            resolve({success: true});
        } catch (e) {
            console.log(e);
            reject({success: false});
        }
    })
};
