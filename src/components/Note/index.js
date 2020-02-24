import React from 'react';
import './index.css';

function Note(props) {
    const { id, title, description, isPinned } = props.note;
    
    function handleClick(){
        props.onClick({ id, title, description, isPinned });
    }

    return (
        <div className={`grid-item ${props.size}`} onClick={handleClick}>
            <strong>{title}</strong>
            <p>{description}</p>
        </div>
    )
}

export default Note;