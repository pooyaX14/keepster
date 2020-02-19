import React from 'react';
import './index.css';

function Note(props) {
  const size=props.size;
  

  return (
    <div className={`grid-item ${size}`}>
        <strong>{props.title}</strong>
        <p>{props.children}</p>
    </div>
  );
}

export default Note;

// if(props.size === "short") {
//     return (
//       <grid-item className="short">
//           <strong>{props.title}</strong>
//           <p>{props.children}</p>
//     </grid-item>
//   )
// } else if(props.size === "tall"){
//     return (
//       <grid-item className="tall">
//           <strong>{props.title}</strong>
//           <p>{props.children}</p>
//       </grid-item>
//   )
// } else if(props.size === "taller") {
//     return (
//       <grid-item className="taller">
//           <strong>{props.title}</strong>
//           <p> {props.children}</p>
//       </grid-item>
//   )
// } else if(props.size === "tallest") {
//   return (
//       <grid-item className="tallest">
//           <strong>{props.title}</strong>
//           <p>{props.children}</p>
//       </grid-item>
//   )
//   }