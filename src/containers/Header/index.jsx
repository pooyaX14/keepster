import React from 'react';

import { withRouter, RouteComponentProps, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './index.css';
import { FaBars } from 'react-icons/fa';

import Search from '../../components/Search';
import MenuItem from '../../components/MenuItem';

import { toggleMenu } from '../../store/actions';

function Header(props) {
  function toggleMenu () {
    props.toggleMenu();
  }
  return (
    <div className="header">
      <div className="menu-items">
        <MenuItem>
          <FaBars size="30" onClick={toggleMenu} style={menuIconStyle}/>
          <h2> {props.title} </h2>
        </MenuItem>
      </div>

      <div>
        <Search />
      </div>
      <div>
        <h1>
          Keepster
        </h1>
      </div>
    </div>
  );
}

function mapStateToProps(state, { location} )  {
  return {
    title: state.sidebar_state.displaySection
  }
}

export default connect(mapStateToProps, {
  toggleMenu: toggleMenu
})(Header);

const menuIconStyle = {
  cursor: "pointer"
}