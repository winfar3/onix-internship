import './SocialItem.scss';

export function SocialItem(props) {
  return(
      <button className="socials__item">
          <img src={props.imageUrl} alt="social icon" className="socials__img" />
          <p className="socials__text">{props.number}</p>
          <p className="socials__text">{props.popularity}</p>
      </button>
  );
}