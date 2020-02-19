import React from 'react';
import './index.css';

import Note from '../../components/Note';

function NotesGrid(props) {
    console.log("props.notes", props.notes)
   const note_grid = props.notes.map((note, index) => {
       if(note.isPinned) {
            return (
               <Note key={note.id} size="short" title={note.title}>{note.note}</Note>
            )
       } else {
           if(note.note.length < 35) {
              
                return (
                    <Note key={note.id} size="short" title={note.title}>{note.note}</Note>  
                ) 
           } else if(note.note.length > 35 && note.note.length < 70 ) {
           
                return (
                    <Note key={note.id} size="tall" title={note.title}>{note.note}</Note>  
                ) 
           } else if(note.note.length > 70 && note.note.length < 100 ) {
           
                return (
                    <Note key={note.id} size="taller" title={note.title}>{note.note}</Note>  
                ) 
            } else if(note.note.length > 100 ) {
              
                return (
                    <Note key={note.id} size="tallest" title={note.title}>{note.note}</Note>  
                )  
            }               
       }     
    })
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
/* 
<div className="notes-grid">
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