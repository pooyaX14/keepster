import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { saveNote, getNotes } from '../../store/actions.js'
import './index.css';

import CreateNote from '../CreateNote';
import Display from '../../containers/Display';

class MainSection extends React.Component {

   componentDidMount() {
        this.props.getNotes()
    } 
   
    render() {
        return (
            <div className="main-section">
                <CreateNote saveNote={this.props.saveNote}/>
                <Display notes={this.props.notes_state}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        notes_state: state.notes_state,
    };
}
  
  
export default connect(mapStateToProps, {
    saveNote: saveNote,
    getNotes: getNotes
})(MainSection);
