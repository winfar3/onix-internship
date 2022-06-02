import './GalleryItem.scss';

export function GalleryItem({ imageUrl, alt }) {
  return(
      <div className="instagram-gallery__item">
          <img src={imageUrl} alt={alt} className="instagram-gallery__img"/>
      </div>
  );
}