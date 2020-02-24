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

// p {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     font-size: 50px;
//     /* color: white; */
//     transform: translate(-50%,-50%);
// }
/* 


// .grid-item {
//   position: fixed; /* Sit on top of the page content */
//   display: none; /* Hidden by default */
//   width: 100%; /* Full width (cover the whole page) */
//   height: 100%; /* Full height (cover the whole page) */
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background-color: rgba(0,0,0,0.5); /* Black background with opacity */
//   z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
//   cursor: pointer; /* Add a pointer on hover */
// }



/* <div className="notes-grid">
      <h3>{props.title}</h3>
      <grid-container>
        <Note size="short" title ="Shopping List">
        Argumentative Indian
The white mughals
India after independence
The first war of independence 1857

License Raj, Red Book

eichmann in jerusalem
        </Note>
        <Note size="tall" title ="Daily todos"/>
        <Note size="short" title ="Movies to watch"/>
        <Note size="taller" title ="My projects" />
        <Note size="tallest" title ="Data science resources"/>
        <Note size="short" title ="Flash episodes"/>
      </grid-container>

</div> */