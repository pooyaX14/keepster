import shortid from 'shortid';
import localforage from 'localforage';

/*
 * action types
 */


export const TOGGLE_MENU = 'TOOGLE_MENU';
export const DISPLAY_SECTION = 'DISPLAY_SECTION';

export const SAVE_NOTE = 'SAVE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';

export const GET_PINNED_NOTES= 'GET_PINNED_NOTES';
export const GET_NOTES= 'GET_NOTES';
export const CLOSE_NOTE = 'CLOSE_NOTE';

export const OPEN_EDIT_MODAL = 'OPEN_EDIT_MODAL';
export const CLOSE_EDIT_MODAL = 'CLOSE_EDIT_MODAL';

/*
 * action creators
 */
export function toggleMenu() {
    return { 
      type: TOGGLE_MENU 
    }
}

export function selectSection(sectionName) {
    return { 
      type: DISPLAY_SECTION, 
      sectionName 
    }
}


export function openEditModal(note) {
    return {
        type: OPEN_EDIT_MODAL,
        note
    }
}

export function closeEditModal(note) {
    return {
        type: CLOSE_EDIT_MODAL
    }
}
// export function saveNote(note) {
//   const id = shortid();
//   return {
//     type: SAVE_NOTE,
//     payload: {
//       id: id,
//       ...note    
//     }
    
//   }
// }
function success(action, payload) {
    return {
        type: action,
        payload: payload
    }
}


// notesArr = JSON.parse(localStorage.getItem('notesArr')) || [];
// notesArr.push(note);
// localStorage.setItem("notesArr", JSON.stringify(notesArr));

export function saveNote(note) {
    return async (dispatch) => {
        const notesType = note.isPinned ? 'pinnedNotes' : 'notes';
        let notesArr = await localforage.getItem(notesType) || [];

        const id = shortid();
        notesArr.unshift({id, ...note});

        localforage.setItem(notesType, notesArr)
            .then(function(notes) {
                dispatch(success(SAVE_NOTE, {id, ...note}))    
            }).catch(function(err) {
                console.log(err);
            });
    };
}

export function updateNote(id, updatedNote) {
    return async (dispatch) => {
        
        const notesType = updatedNote.isPinned ? 'pinnedNotes' : 'notes';
        let notesArr = await localforage.getItem(notesType) || [];
        

        const updatedNotesArr = notesArr.map((note) => { 
            if (note.id === id) {
                return {
                    ...updatedNote,
                    id,
                }
            }
            return note
        })
        localforage.setItem(notesType, updatedNotesArr)
            .then(function(notes) {
                dispatch(success(UPDATE_NOTE, {id, ...updatedNote}))    
            }).catch(function(err) {
                console.log(err);
            });

    }
}


export function getNotes() {
    return async (dispatch) => {
        try {
            const notes =  await localforage.getItem('notes') || []
            if(notes.length > 0) { 
                dispatch({type: GET_NOTES, notes})
            }
        }
        catch(err) {
            console.log(err)
        }
    }
}

export function getPinnedNotes() {
    return async (dispatch) => {
        try {
            const pinnedNotes =  await localforage.getItem('pinnedNotes') || []
            if(pinnedNotes.length > 0) { 
                dispatch({type: GET_PINNED_NOTES, pinnedNotes})
            }
        }
        catch(err) {
            console.log(err)
        }
    }
}