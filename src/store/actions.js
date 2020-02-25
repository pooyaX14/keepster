import shortid from 'shortid';
import localforage from 'localforage';

/*
 * action types
 */


export const TOGGLE_MENU = 'TOOGLE_MENU';
export const DISPLAY_SECTION = 'DISPLAY_SECTION';

export const SAVE_NOTE = 'SAVE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';

export const GET_PINNED_NOTES= 'GET_PINNED_NOTES';
export const GET_NOTES= 'GET_NOTES';
export const CLOSE_NOTE = 'CLOSE_NOTE';

export const PIN_NOTE= 'PIN_NOTE';
export const UNPIN_NOTE = 'UNPIN_NOTE';

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

function success(action, payload) {
    return {
        type: action,
        payload: payload
    }
}

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

async function removeFromNotes(noteToRemove) {
    const notes = await localforage.getItem('notes') || [];

    const updatedNotes = notes.filter((note) => note.id !== noteToRemove.id);

    return localforage.setItem('notes', updatedNotes);
}

async function addToPinnedNotes(noteToPin) {
    const pinnedNotes = await localforage.getItem('pinnedNotes') || [];

    pinnedNotes.unshift({...noteToPin, isPinned: true});

    return localforage.setItem('pinnedNotes', pinnedNotes);
}

export function pinNote(noteToPin) {
    return async (dispatch) => {
        try {
            Promise.all([
                removeFromNotes(noteToPin),
                addToPinnedNotes(noteToPin)
            ]).then(([notes, pinnedNotes]) =>{
                dispatch(success(PIN_NOTE, {
                    notes, pinnedNotes
                }));
            })
        }
        catch(err) {
            console.log(err);
        } 
    }  
}



async function addUnpinNoteToNotes(noteToAdd) {
    const notes = await localforage.getItem('notes') || [];

    // Add the received note to 'notes' array of localForage
    notes.unshift({...noteToAdd, isPinned: false});
    // save to localForage notes array
    return localforage.setItem('notes', notes);
}

async function removeFromPinnedNotes(noteToUnpin) {

    let pinnedNotes = await localforage.getItem('pinnedNotes') || [];

    pinnedNotes = pinnedNotes.filter((note) => note.id !== noteToUnpin.id);

    return localforage.setItem('pinnedNotes', pinnedNotes);
}

export function unpinNote(noteToUnpin) {
    return async (dispatch) => {
        try {
            Promise.all([
                addUnpinNoteToNotes(noteToUnpin),
                removeFromPinnedNotes(noteToUnpin)
            ]).then(([notes, pinnedNotes]) =>{
                dispatch(success(PIN_NOTE, {
                    notes, pinnedNotes
                }));
            })
        }
        catch(err) {
            console.log(err);
        } 
    }
   
}