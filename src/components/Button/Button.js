import './Button.scss';

export function Button(props) {
  return (
    <button 
        onClick={props.logic}
        className={props.styles}
      >
        {props.content}
      </button>
  );
}
