import React from 'react';
import './index.css';
import { connect } from 'react-redux';

import EditNote from '../EditNote/EditNote';

import { EditConsumer } from '../MainSection/index';
import { saveNote } from '../../store/actions';

// const defaultNoteState = {
//   title: '',
//   note: '',
//   pinned: false,
//   archived: false,
// };
class CreateNote extends React.Component {

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
        const { isNoteExpanded} = this.state;
        return (
            
            isNoteExpanded 
                ?                 
                <div className="note-card note-card--take-note">
                    <EditNote focusTextBox focusPosition={0}
                        onClose={this.noteShouldNotExpand} 
                        onSave={this.props.saveNote}  
                        />
                </div>
                            
                : 
                
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
         
        )   
    }
}

export default connect(null, {saveNote: saveNote})(CreateNote);