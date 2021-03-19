import * as actionTypes from '../actions/types';

const initialState = {
    count: 0,
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.COUNTER_INCREMENT:
            return {
                count: state.count + 1,
            };

        case actionTypes.COUNTER_DECREMENT:
            return {
                count: state.count - 1,
            };

        default:
            return state;
    }
};

export default counterReducer;
