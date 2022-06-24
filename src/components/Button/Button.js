import './Button.scss';

import PropTypes from 'prop-types';

function Button({ 
  isSending, 
  logic, 
  styles, 
  content 
}) {
  return (
    <button
      type={isSending ? 'submit' : 'button'}
      onClick={logic}
      className={styles}
    >
      {content}
    </button>
  );
}

Button.propTypes = {
  isSending: PropTypes.bool,
  logic: PropTypes.oneOfType([PropTypes.func, PropTypes.number]), 
  styles: PropTypes.string.isRequired, 
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

Button.defaultProps = {
  isSending: false,
  logic: null,
};

export default Button;
