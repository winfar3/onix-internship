import "./InstagramGallery.scss";
import instaPhoto1 from "../../assets/images/instagramGallery/01.png";
import instaPhoto2 from "../../assets/images/instagramGallery/02.png";
import instaPhoto3 from "../../assets/images/instagramGallery/03.png";
import instaPhoto4 from "../../assets/images/instagramGallery/04.png";
import instaPhoto5 from "../../assets/images/instagramGallery/05.png";
import instaPhoto6 from "../../assets/images/instagramGallery/06.png";

export function InstagramGallery() {
    const InstagramGalleryData = [{
        id: "01",
        imageUrl: instaPhoto1,
        alt: "Lorem Ipsum"
    }, {
        id: "02",
        imageUrl: instaPhoto2,
        alt: "Lorem Ipsum"
    }, {
        id: "03",
        imageUrl: instaPhoto3,
        alt: "Lorem Ipsum"
    }, {
        id: "04",
        imageUrl: instaPhoto4,
        alt: "Lorem Ipsum"
    }, {
        id: "05",
        imageUrl: instaPhoto5,
        alt: "Lorem Ipsum"
    }, {
        id: "06",
        imageUrl: instaPhoto6,
        alt: "Lorem Ipsum"
    }]
    return(
        <section className="instagram-gallery">
            <h2 className="instagram-gallery__title">Follow our <a href="#" className="instagram-gallery__link">@instagram_name</a></h2>
            <div className="instagram-gallery__list">
                {InstagramGalleryData.map(InstagramGalleryDataItem =>
                    <GalleryItem {...InstagramGalleryDataItem} key={InstagramGalleryDataItem.id} />
                )}
            </div>
        </section>
    );
}

function GalleryItem(props) {
    return(
        <div className="instagram-gallery__item">
            <img src={props.imageUrl} alt={props.alt} className="instagram-gallery__img"/>
        </div>
    );
}