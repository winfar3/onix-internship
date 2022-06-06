import './SocialItem.scss';

export function SocialItem({ socialMediaDataItem }) {
  const imageUrl = socialMediaDataItem.imageUrl;
  const number = socialMediaDataItem.number;
  const popularity = socialMediaDataItem.popularity;

  return(
      <button className="socials__item">
          <img src={imageUrl} alt="social icon" className="socials__img" />
          <p className="socials__text">{number}</p>
          <p className="socials__text">{popularity}</p>
      </button>
  );
}