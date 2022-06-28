import './Modal.scss';

import { useEffect } from 'react';
import { element, func } from 'prop-types';

import ModalView from './ModalView';

function Modal({ toggleModal, children }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        toggleModal();
      }
    };

    window.addEventListener('keyup', handleEscape);

    return () => window.removeEventListener('keyup', handleEscape);
  });

  return <ModalView toggleModal={toggleModal}>{children}</ModalView>;
}

Modal.propTypes = {
  toggleModal: func,
  children: element,
};

Modal.defaultProps = {
  toggleModal() {},
  children: null,
};

export default Modal;
