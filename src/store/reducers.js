import {
    TOGGLE_MENU,
    DISPLAY_SECTION,

    SAVE_NOTE,
    GET_NOTES,
    GET_PINNED_NOTES,

    OPEN_EDIT_MODAL,
    CLOSE_EDIT_MODAL,
    UPDATE_NOTE,
} from './actions';

export const sidebarInitialState = {
    isMenuHidden: false,
    searchText: '',
    displaySection: "Notes"
}

export function sidebarReducer(state=sidebarInitialState, action) {
  switch(action.type) {
    case TOGGLE_MENU:
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

export const editModalInitialState = {
    isModalOpen: false,
    note: {},
  }

export function editModalReducer(state=sidebarInitialState, action) {
    switch(action.type) {
        case OPEN_EDIT_MODAL:
            return {
                isModalOpen: true,
                note: action.note
            }
        case CLOSE_EDIT_MODAL:
            return {
                isModalOpen: false,
                note: {}
            }
        default:
            return state
    }
}

export const noteInitialState = {
    pinnedNotes: [],
    notes: []
};


export function notesReducer(state=noteInitialState, action) {
    switch(action.type) {
        case SAVE_NOTE:
            const note = action.payload;
            if(note.isPinned) {
                return {
                    ...state,
                    pinnedNotes: [
                        note,
                        ...state.pinnedNotes
                    ]
                }
            } else {
                return {
                    ...state,
                    notes: [
                        note,
                        ...state.notes
                    ]
                }
            }
        case UPDATE_NOTE:
            const updatedNote = action.payload;
            if(updatedNote.isPinned) {
                return {
                    ...state,
                    pinnedNotes: [
                        updatedNote,
                        ...state.pinnedNotes
                    ]
                }
            } else {
                const notes = state.notes.map((note) =>{
                    if (note.id === updatedNote.id) {
                        return updatedNote;
                    } else {
                        return note;
                    }
                });
                return {
                    ...state,
                    notes,
                }
            }
        case GET_PINNED_NOTES:
            const pinnedNotes = action.pinnedNotes;
            return {
                ...state,
                pinnedNotes 
            };

        case GET_NOTES:
                const notes = action.notes;
                return {
                    ...state,
                    notes 
                };
        default:
            return state
    }
}


