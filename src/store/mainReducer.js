import { combineReducers } from 'redux';
import { sidebarReducer, notesReducer } from './reducers'

const appReducer = combineReducers({
  sidebar_state: sidebarReducer,
  notes_state: notesReducer
});

const rootReducer = (state ,action) => {
  return appReducer(state, action);
}

export default rootReducer;