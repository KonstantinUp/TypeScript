/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../Reducers';

let store = null;

export default function configureStore() {
    store = createStore(
        rootReducer,
        {},
        applyMiddleware(
            thunk
        )
    );
    return store;
}

export { store };