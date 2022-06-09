import './Button.scss'

import PropTypes from "prop-types"

function Button({ logic, styles, content }) {
  return (
    <button 
        onClick={logic}
        className={styles}
      >
        {content}
      </button>
  )
}

Button.propTypes = {
  logic: PropTypes.func, 
  styles: PropTypes.string, 
  content: PropTypes.string,
}

export default Button