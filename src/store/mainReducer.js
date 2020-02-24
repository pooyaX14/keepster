import { combineReducers } from 'redux';
import { sidebarReducer, notesReducer, editModalReducer } from './reducers'

const appReducer = combineReducers({
  sidebar_state: sidebarReducer,
  notes_state: notesReducer,
  edit_modal_state: editModalReducer
});

const rootReducer = (state ,action) => {
  return appReducer(state, action);
}

export default rootReducer;