import './InstagramGallery.scss';
import instaPhoto1 from '../../assets/images/instagramGallery/01.png';
import instaPhoto2 from '../../assets/images/instagramGallery/02.png';
import instaPhoto3 from '../../assets/images/instagramGallery/03.png';
import instaPhoto4 from '../../assets/images/instagramGallery/04.png';
import instaPhoto5 from '../../assets/images/instagramGallery/05.png';
import instaPhoto6 from '../../assets/images/instagramGallery/06.png';
import InstagramGalleryView from './InstagramGalleryView';

function InstagramGallery() {
  const instagramGalleryData = [
    {
      id: '01',
      imageUrl: instaPhoto1,
      alt: 'Lorem Ipsum',
    },
    {
      id: '02',
      imageUrl: instaPhoto2,
      alt: 'Lorem Ipsum',
    },
    {
      id: '03',
      imageUrl: instaPhoto3,
      alt: 'Lorem Ipsum',
    },
    {
      id: '04',
      imageUrl: instaPhoto4,
      alt: 'Lorem Ipsum',
    },
    {
      id: '05',
      imageUrl: instaPhoto5,
      alt: 'Lorem Ipsum',
    },
    {
      id: '06',
      imageUrl: instaPhoto6,
      alt: 'Lorem Ipsum',
    },
  ];

  const instagramLink = 'https://www.instagram.com/';
  return (
    <InstagramGalleryView
      instagramGalleryData={instagramGalleryData}
      instagramLink={instagramLink}
    />
  );
}

export default InstagramGallery;
