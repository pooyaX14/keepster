import React, {useState} from 'react';
import { TiPinOutline } from 'react-icons/ti';
import './index.css';

function Note(props) {
    const [hover, setHover] = useState(false);
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
    
    return (
        <div className={`grid-item ${props.size} ${hover ? "show_tools" : ""}`} 
            onClick={handleClick} 
            onMouseEnter={onHover}
            onMouseLeave={onHoverLeave}
            >
            {/* <strong>{title}</strong>   */}
            <div className="note-card-heading__container">
                <div className="note-card__title">{title}</div>  
                <div className="pin_note">
                    <TiPinOutline size="30"/>
                </div>
            </div>
            
                
            <p>{description}</p>
           
        </div>
    )
}

export default Note;

// className={`grid-item ${props.size}`}