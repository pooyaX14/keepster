import React, {useState, useEffect} from 'react';
import { TiPinOutline } from 'react-icons/ti';
import './index.css';

function Note(props) {
    const [hover, setHover] = useState(false);
    const [pinned, setPinState] = useState(false);
    const { id, title, description, isPinned } = props.note;
  
    function handleClick(){
        props.onClick({ id, title, description, isPinned });
    }

    function onHover() {
        setHover(true)
    }

    function onHoverLeave() {
        setHover(false)
    }
    function togglePin(e) {
        e.stopPropagation();

        if(isPinned) {      
            props.onUnpinClick(props.note);
        }else {
            props.onPinClick(props.note);
           
        }
    }
   
    return (
        <div className={`grid-item ${props.size} ${hover ? "show_tools" : ""}`} 
            onClick={handleClick} 
            onMouseEnter={onHover}
            onMouseLeave={onHoverLeave}
            >
            {/* <strong>{title}</strong>   */}
            <div className="note-card-heading__container">
                <div className="note-card__title">{title}</div>  
                <div className="pin_note" onClick={togglePin}>
                    <TiPinOutline size="30"/>
                </div>
            </div>
            
                
            <p>{description}</p>
           
        </div>
    )
}

export default Note;
