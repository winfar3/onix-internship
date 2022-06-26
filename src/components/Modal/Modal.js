import './Modal.scss';

import { useContext, useEffect } from 'react';
import { element } from 'prop-types';

import ModalView from './ModalView';
import ModalContext from '../../context/ModalContext';

function Modal({ children }) {
  const { showModalHandler } = useContext(ModalContext);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        showModalHandler('');
      }
    };

    window.addEventListener('keyup', handleEscape);

    return () => window.removeEventListener('keyup', handleEscape);
  });

  return <ModalView showModalHandler={showModalHandler}>{children}</ModalView>;
}

Modal.propTypes = {
  children: element,
};

Modal.defaultProps = {
  children: null,
};

export default Modal;
