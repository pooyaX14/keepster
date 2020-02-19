import React, { useState } from 'react';
import { connect } from 'react-redux';
import { saveNote } from '../../store/actions.js'
import EditNote from '../EditNote/EditNote';
import './index.css';

const defaultNoteState = {
  title: '',
  note: '',
  pinned: false,
  archived: false,
};
class CreateNote extends React.Component {
  // const [isNoteExpanded, setNoteExpand] = React.useState(false);

  // shouldNoteExpand() {
  //   setNoteExpand(true);
  // }
  constructor(props) {
    super(props);
    this.state = {
      isNoteExpanded: false,
    };
  }

  noteShouldExpand = () => {
    this.setState(() => ({
      isNoteExpanded: true,
    }));
  }

  noteShouldNotExpand = () => {
    this.setState(() => ({
      isNoteExpanded: false,
    }));
  }

  render() {
    if (this.state.isNoteExpanded) {
      return (
        <div className="note-card note-card--take-note">
          <EditNote focusTextBox focusPosition={0}  
            noteToEdit={defaultNoteState} 
            onClose={this.noteShouldNotExpand} 
            saveNote={this.props.saveNote}
            getNotes={this.props.getNotes}   
            />
        </div>
      );
    } else {
      return (
        <div className="note-card note-card--take-note">
          <div className="note-card__container">
            <div
              contentEditable
              data-placeholder="Click here to create a note"
              role="textbox"
              tabIndex={0}
              onKeyDown={this.noteShouldExpand}
              onClick={this.noteShouldExpand}
              className="note-card__textbox"
            />
          </div>
        </div>
      );
    }
  }
}

// function mapStateToProps(state) {
//   return {
//     notes_state: state.notes_state,
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     saveNote: (note) => dispatch(saveNote(note))
//   };
// }

// export default connect(mapStateToProps, {
//   saveNote: saveNote
// })(CreateNote);
export default CreateNote;