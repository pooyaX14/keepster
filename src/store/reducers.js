import {
    TOGGLE_MENU,
    DISPLAY_SECTION,
    SAVE_NOTE,
    GET_NOTES,
} from './actions'; 
import { stat } from 'fs';

export const sidebarInitialState = {
  isMenuHidden: false,
  searchText: '',
  displaySection: "Notes"
}

export function sidebarReducer(state=sidebarInitialState, action) {
  switch(action.type) {
    case TOGGLE_MENU:
        console.log("action called inside reducer", action)
        return {
          ...state,
          isMenuHidden: !state.isMenuHidden
        }
    case DISPLAY_SECTION:
        return Object.assign({}, state, {
          displaySection: action.sectionName
        });
    default:
        return state
  }
}

export const noteInitialState = []


export function notesReducer(state=noteInitialState, action) {
  switch(action.type) {
    case SAVE_NOTE:
        const newState = action.payload
        return [...state, newState ]
    case GET_NOTES:
        const getNotes = action.notesArr
        return [...getNotes]
    default:
        return state
  }
}


