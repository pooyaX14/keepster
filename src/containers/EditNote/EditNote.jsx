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
    const description = this.refs.note.innerText;
    this.setState({
      isDone: true
    })
    this.props.onSave({title, description, isPinned: false, isArchived: false})
    
    if(this.props.onClose) {
        this.props.onClose()
    }
  }

  render() {
      const { note } = this.props;
     console.log(note)
    return (
     
      <div className="note-card note-card--edit-note" ref={this.setNodeRef}>
        <div  className="note-card__container" onKeyDown={this.handleContainerKeyDown}>
          <div
            className="note-card__title"
            ref='title'
            contentEditable={true}
            data-placeholder='title'
            role="textbox"
          >{ note ? note.title : null }
          </div>

          <div
            className="note-card__textbox note-card__textbox--editable"
            data-placeholder="Click here to create a note.................."
            ref='note'
            contentEditable={true}
            role="textbox"
          >{note ? note.description : null}
          </div>

          <div 
            role="button"
            className="add_note_button"
            onClick={this.addNote}>Save Note</div>
        </div>
      </div>
    );
  }
}


export default EditNote;