import './GalleryItem.scss';

import PropTypes from 'prop-types';

function GalleryItem({ instagramGalleryDataItem }) {
  const imageUrl = instagramGalleryDataItem.imageUrl;
  const alt = instagramGalleryDataItem.alt

  return(
      <div className="instagram-gallery__item">
          <img src={imageUrl} alt={alt} className="instagram-gallery__img"/>
      </div>
  );
}

GalleryItem.propTypes = {
  instagramGalleryDataItem: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  })
}

export default GalleryItem;