import React from 'react';
import './index.css';

import NotesGrid from '../../containers/NotesGrid';

function Display(props) {
  return (
    <div className="main-section">
       { 
            props.notes.isPinned
            ? 
            <NotesGrid title="PINNED" notes={props.notes}/>
            :
            <NotesGrid title="OTHERS" notes={props.notes}/>
       }
    </div>
  );
}

export default Display;