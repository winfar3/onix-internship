import './GalleryItem.scss';

import PropTypes from 'prop-types';

function GalleryItem({ imageUrl, alt }) {
  return(
      <div className="instagram-gallery__item">
          <img src={imageUrl} alt={alt} className="instagram-gallery__img"/>
      </div>
  );
}

GalleryItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default GalleryItem;