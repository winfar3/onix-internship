import { element, func } from 'prop-types';
import Button from '../Button/Button';

function ModalView({ children, toggleModal }) {
  return (
    <>
      <div className="modal">
        <Button 
          logic={() => toggleModal('')}
          styles="button_close"
          content="&nbsp;"
        />
        {children}
      </div>
      <div className="overlay" />
    </>
  );
}

ModalView.propTypes = {
  children: element,
  toggleModal: func,
};

ModalView.defaultProps = {
  children: null,
  toggleModal() {},
};

export default ModalView;
