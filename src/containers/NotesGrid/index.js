import React from 'react';
import './index.css';
import Note from '../../components/Note';

function generateSizeDefinitions({
    tall, taller, tallest
}) {
    return {
        tall: tall || 35,
        taller: taller || 70,
        tallest: tallest || 100
    }
}

function getNoteSize(textLength, sizeDefinitions) {
    let size = "short";
    if (textLength >= sizeDefinitions.tall && textLength < sizeDefinitions.taller) {
        size = "tall";
    } else if (textLength >= sizeDefinitions.taller && textLength < sizeDefinitions.tallest) {
        size = "taller";
    } else if (textLength >= sizeDefinitions.tallest) {
        size = "tallest";
    }
    return size;
}

function NotesGrid(props) {
   const sizeDefinitions = generateSizeDefinitions(props.sizeDefinitions || {}); 

    const note_grid = props.notes.map((note, index) => {
        const size = getNoteSize(note.description.length, sizeDefinitions);
        return (
            <Note
                key={note.id}
                size={size}
                note={note}            
                onClick={props.onNoteClick}
                onPinClick={props.onPinClick}
                onUnpinClick={props.onUnpinClick}
            />
        )
    });

    return (
        <div className="notes-grid">
            <h3>{props.title}</h3>
            <grid-container>
                {note_grid}
            </grid-container>    
        </div>
    )
}



export default NotesGrid;

