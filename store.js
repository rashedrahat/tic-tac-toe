import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';

const initialState = {};

const middleware = [thunk];

// dev tools middleware
const composeSetup =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : compose;

const store = createStore(rootReducer, initialState, composeSetup(applyMiddleware(...middleware)));

export default store;
