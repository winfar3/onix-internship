import './SocialItem.scss';

export function SocialItem({ imageUrl, number, popularity }) {
  return(
      <button className="socials__item">
          <img src={imageUrl} alt="social icon" className="socials__img" />
          <p className="socials__text">{number}</p>
          <p className="socials__text">{popularity}</p>
      </button>
  );
}