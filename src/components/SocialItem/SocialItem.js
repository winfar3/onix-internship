import './SocialItem.scss';

import PropTypes from 'prop-types';

function SocialItem({ socialMediaDataItem }) {
  const { imageUrl } = socialMediaDataItem.imageUrl;
  const { number } = socialMediaDataItem.number;
  const { popularity } = socialMediaDataItem;

  return (
    <button 
      type="button"
      className="socials__item"
    >
      <img src={imageUrl} alt="social icon" className="socials__img" />
      <p className="socials__text">{number}</p>
      <p className="socials__text">{popularity}</p>
    </button>
  );
}

SocialItem.propTypes = {
  socialMediaDataItem: PropTypes.shape({
    imageUrl: PropTypes.string,
    number: PropTypes.string,
    popularity: PropTypes.string,
  }).isRequired,
};

export default SocialItem;
