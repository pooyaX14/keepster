import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './mainReducer'

import {sidebarInitialState, noteInitialState, editModalInitialState } from './reducers';
import thunk from 'redux-thunk';

export function configureDefaultState() {
    const defaultKeepsterState = {
        sidebar_state: sidebarInitialState,
        notes_state: noteInitialState,
        edit_modal_state: editModalInitialState,
    }

    return defaultKeepsterState;
}

export function configureStore(defaultState) {
    const composeEnhancers = (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
    const store = createStore(rootReducer, defaultState, composeEnhancers(applyMiddleware(thunk)));  
    return store;
}
