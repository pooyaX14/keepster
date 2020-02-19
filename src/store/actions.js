import shortid from 'shortid';
import localforage from 'localforage';

/*
 * action types
 */


export const TOGGLE_MENU = 'TOOGLE_MENU';
export const DISPLAY_SECTION = 'DISPLAY_SECTION';
export const SAVE_NOTE = 'SAVE_NOTE';
export const GET_NOTES= 'GET_NOTES';
export const CLOSE_NOTE = 'CLOSE_NOTE';

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
        let notesArr = await localforage.getItem('notesArr') || [];
        const id = shortid();
        notesArr.push({id, ...note});
        localforage.setItem('notesArr', notesArr).then(function(notes) {
            dispatch(success(SAVE_NOTE, {id, ...note}))
            
        }).catch(function(err) {
            console.log(err);
        });
    };
}

export function getNotes() {
    return async (dispatch) => {
        try {
            const notesArr =  await localforage.getItem('notesArr') || []
            console.log(notesArr)
            if(notesArr.length>0) {
                dispatch({type: GET_NOTES, notesArr})
            }
        }
        catch(err) {
            console.log(err)
        }
    }
}
