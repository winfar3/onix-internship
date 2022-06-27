import { element, func } from 'prop-types';
import Button from '../Button/Button';

function ModalView({ children, showModalHandler }) {
  return (
    <>
      <div className="modal">
        <Button 
          logic={() => showModalHandler('')}
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
  showModalHandler: func,
};

ModalView.defaultProps = {
  children: null,
  showModalHandler() {},
};

export default ModalView;
