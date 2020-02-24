import React from 'react';
import { connect } from 'react-redux';
import { selectSection } from '../../store/actions';

import './index.css';

import MenuItem from '../../components/MenuItem'

import { FaArchive, FaRegStickyNote } from 'react-icons/fa';
import { TiPinOutline } from 'react-icons/ti';

function Sidebar(props) {
  const selectSection = (sectionName) => () => {
    props.selectSection(sectionName);
  }

  return (
    <div className="sidebar">
      <div className="sidebar-section">
        <MenuItem 
          selected={props.displaySection === "Archives"}
          onSelect={selectSection("Archives")}
        >
          <FaArchive size="30" />
          <div>
            <h4> Archives </h4>
          </div>
          
        </MenuItem>

        <MenuItem
          selected={props.displaySection === "Notes"}
          onSelect={selectSection("Notes")}
        >
          <FaRegStickyNote size="30"/>
          <div>
            <h4> Notes </h4>
          </div>
          
        </MenuItem>
        <MenuItem
          selected={props.displaySection === "Pinned Notes"}
          onSelect={selectSection("Pinned Notes")}
        >
          <TiPinOutline size="30"/>
          <div>
            <h4> Pinned Notes </h4>
          </div>
          
        </MenuItem>
      </div>
    </div>
  );
}

function mapStateToProps(state, { location} )  {
  return {
    displaySection: state.sidebar_state.displaySection
  }
}

export default connect(mapStateToProps, {
  selectSection: selectSection,
})(Sidebar);