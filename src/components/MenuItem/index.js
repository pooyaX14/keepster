import React from 'react';
import './index.css';

function MenuItem(props) {
  // console.log(props.selected)
  return (
    <div className={`menu-item ${props.selected ? "selected" : ""}`} onClick={props.onSelect}>
      {props.children}
    </div>
  );
}

export default MenuItem;