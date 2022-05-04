import './GalleryItem.scss';

export function GalleryItem(props) {
  return(
      <div className="instagram-gallery__item">
          <img src={props.imageUrl} alt={props.alt} className="instagram-gallery__img"/>
      </div>
  );
}