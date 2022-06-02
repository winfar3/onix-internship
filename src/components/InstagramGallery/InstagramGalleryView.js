import PropTypes from 'prop-types';

import GalleryItem from "../GalleryItem/GalleryItem";

function InstagramGalleryView({ InstagramGalleryData, instagramLink }) {
  return(
<section className="instagram-gallery">
    <h2 className="instagram-gallery__title">Follow our <a href={instagramLink} className="instagram-gallery__link">@instagram_name</a></h2>
    <div className="instagram-gallery__list">
        {InstagramGalleryData.map(InstagramGalleryDataItem =>
            <GalleryItem {...InstagramGalleryDataItem} key={InstagramGalleryDataItem.id} />
        )}
    </div>
</section>
  )
}

InstagramGalleryView.propTypes = {
  InstagramGalleryData: PropTypes.array.isRequired,
  instagramLink: PropTypes.string.isRequired,
}

export default InstagramGalleryView;