import { element, func } from 'prop-types';

function ModalView({ children, showModalHandler }) {
  return (
    <>
      <div className="modal">
        <button
          type="button"
          onClick={() => showModalHandler()}
          className="button_close"
        >
          X
        </button>
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
