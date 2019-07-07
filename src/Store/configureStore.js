/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../Reducers';

let store = null;

export default function configureStore(initialState, routerMiddleware) {
    store = createStore(
        rootReducer,
        initialState + window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(
            thunk,
            routerMiddleware
        )
    );
    return store;
}

export { store };