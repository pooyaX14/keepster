//Steps to show modal box and show text fields and edit them and save it when click on save btn and or if clicked ouside
// so what this component will need
//  coordinates for transition it so that it lays on top of the current layout and is in the middle
// - text fields with current title and note {id: 1, title: "t", note: "n"}
//- notes_state = [{id: 1, title: "t", note: "n"}]
// somehow i need to pass the id of the note and fetch title and note desciption and call the action which
// will call the reducer and map through the array and check the note_state.id === action.payload.id ?
// then note_state.title = action.title and note_state.note= action.note and return the new array

// close the modal-> meaning make state false and display none;  

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateNote, closeEditModal } from '../../store/actions.js'
import EditNote from '../EditNote/EditNote';
import './index.css';


class EditModalBox extends Component {

    handleSave = (note) => {
        const { updateNote } = this.props;
        const { id } = this.props.note;

        updateNote(id, note);

        //call action to change the isModalaction
        this.props.closeEditModal();
    }
  
    render() {
        const { isModalOpen, note } = this.props;

        return (
            isModalOpen 
                ? (              
                    <div className="edit-modal note-card note-card--take-note">
                        <EditNote
                            focusTextBox 
                            focusPosition={0}
                            note={note}
                            onSave={this.handleSave}
                            isModalOpen={isModalOpen}
                            />                   
                    </div> 
                )
                : null           
        )
    }
}


function mapStateToProps(state) {
    return {
        isModalOpen: state.edit_modal_state.isModalOpen,
        note: state.edit_modal_state.note
    };
}
  
  
export default connect(mapStateToProps, {
    updateNote: updateNote,
    closeEditModal: closeEditModal
})(EditModalBox);



