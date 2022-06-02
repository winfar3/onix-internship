import './Button.scss';

export function Button({ logic, styles, content }) {
  return (
    <button 
        onClick={logic}
        className={styles}
      >
        {content}
      </button>
  );
}
