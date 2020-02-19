import React from 'react';
import { connect } from 'react-redux';

import './index.css';

import Sidebar from '../Sidebar';
import Mainsection from '../MainSection';

function Layout(props) {
  return (
    <div className={`layout ${props.isMenuHidden ? "hide-menu" : ""}`}>
      <Sidebar />

      <Mainsection />
    </div>
  );
}

function mapStateToProps(state, { location} )  {
  return {
    isMenuHidden: state.sidebar_state.isMenuHidden
  }
}

export default connect(mapStateToProps, {})(Layout);