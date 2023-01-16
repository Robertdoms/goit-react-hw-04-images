import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalOverlay, ModalWindow } from './Modal.styled';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);
  const handleBackDropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  return createPortal(
    <ModalOverlay onClick={handleBackDropClick}>
      <ModalWindow>{children}</ModalWindow>
    </ModalOverlay>,
    modalRoot
  );
};

export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
