import React, { Component } from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import './modal.css';

ReactModal.setAppElement(document.getElementById('root'));

class Modal extends Component {
  render() {
    const { children, ...rest } = this.props;
    return (
      <ReactModal {...rest}>
        {children}
      </ReactModal>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Modal;
