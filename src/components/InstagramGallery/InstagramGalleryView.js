import PropTypes from 'prop-types';

import GalleryItem from '../GalleryItem/GalleryItem';

function InstagramGalleryView({ 
  instagramGalleryData, 
  instagramLink, 
  instagramTitle,
  instagramName, 
}) {
  return (
    <section className="instagram-gallery">
      <h2 className="instagram-gallery__title">
        {instagramTitle}
        <a href={instagramLink} className="instagram-gallery__link">
          {instagramName}
        </a>
      </h2>
      <div className="instagram-gallery__list">
        {instagramGalleryData.map((instagramGalleryDataItem) => (
          <GalleryItem
            instagramGalleryDataItem={instagramGalleryDataItem}
            key={instagramGalleryDataItem.id}
          />
        ))}
      </div>
    </section>
  );
}

InstagramGalleryView.propTypes = {
  instagramGalleryData: PropTypes.arrayOf(PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  })).isRequired,
  instagramLink: PropTypes.string.isRequired,
  instagramTitle: PropTypes.string.isRequired,
  instagramName: PropTypes.string.isRequired,
};

export default InstagramGalleryView;
