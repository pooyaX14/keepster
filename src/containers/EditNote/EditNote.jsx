import React, { Component } from 'react';
import './index.css';

class EditNote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // defaultNoteState: props.noteState,
      isDone: false,
    }
    
  }
 
  addNote = (e) => {
    

    const title = this.refs.title.innerText;
    const note = this.refs.note.innerText;
    this.setState({
      isDone: true
    })
    this.props.saveNote({title, note, isPinned: false, isArchived: false})
    this.props.onClose();
  }

  render() {
    return (
     
      <div style={this.props.rootStyle} className="note-card note-card--edit-note" ref={this.setNodeRef}>
        <div className="note-card__container" onKeyDown={this.handleContainerKeyDown}>
          <div
            className="note-card__title"
            text={this.state.title}
            // onInput={this.handleTitleChange}
            // placeholder={this.props.title}
            ref='title'
            contentEditable
            data-placeholder="Title"
            role="textbox"
          />
          {/* {Button({
            ariaLabel: strings.pinAria,
            ariaPressed: this.props.pinned,
            className: 'note-card__pin',
            icon: pin,
            onInteraction: this.props.pinNote,
          })} */}
          <div
            className="note-card__textbox note-card__textbox--editable"
            text={this.state.note}
            // onInput={this.handleTextBoxChange}
            // placeholder="Click here to create a note"
            data-placeholder="Click here to create a note.................."
            ref='note'
            contentEditable
            role="textbox"
          />
          <div 
            role="button"
            className="add_note_button"
            onClick={this.addNote}>Add Note</div>
        </div>
      </div>
    );
  }
}


export default EditNote;

/* 
saveNote will take the values and update the state
 - take the values
 - call the actions this.props.saveNote({id: 123, title: title, note: note})
 - reducer will append the notes array and return the new array with the new notes array
 - In the render method I'll iterate through the loop and pass title and note values to rendering divs

 -> also call another props this.props.close() which will set shouldNoteExpand to false 
    -> also if use clicks outside of that note container then it will change the shouldNoteExpand to false if it
        set to true

*/