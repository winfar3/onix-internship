import './Button.scss';

import PropTypes from 'prop-types';

function Button({ logic, styles, content }) {
  return (
    <button
      type="button" 
      onClick={logic}
      className={styles}
    >
      {content}
    </button>
  );
}

Button.propTypes = {
  logic: PropTypes.func.isRequired, 
  styles: PropTypes.string.isRequired, 
  content: PropTypes.string.isRequired,
};

export default Button;
