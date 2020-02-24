 import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeEditModal } from '../../store/actions.js'
import './index.css';

class Overlay extends Component {

    handleClick = (e) => {

        this.props.onClick();
       
    }
    render() {
        const { isOverlayActive } = this.props;

        return (
            isOverlayActive 
                ? (
                <div className="editPortal editPortal--visible" ref={ node => this.node=node } onClick={this.handleClick} >
                   
                </div>
                )
                : null           
        )
    }
}


function mapStateToProps(state) {
    return {
        isOverlayActive: state.edit_modal_state.isModalOpen,
    };
}
  
  
export default connect(mapStateToProps, {
    onClick: closeEditModal
})(Overlay);
