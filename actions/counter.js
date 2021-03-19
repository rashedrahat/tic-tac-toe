import * as actionTypes from './types';

export const counterIncrement = () => ({ type: actionTypes.COUNTER_DECREMENT });
export const counterDecrement = () => ({ type: actionTypes.COUNTER_DECREMENT });

export const processCounterIncrement = () => (dispatch) => {
    dispatch(counterIncrement);
};

export const processCounterDecrement = () => (dispatch) => {
    dispatch(counterDecrement);
};
