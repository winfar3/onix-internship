import axios from 'axios';

// TODO: remove images of posts from import and replace them with images from the Internet
import image1 from '../assets/images/postcard/01.png';
import image2 from '../assets/images/postcard/02.png';
import image3 from '../assets/images/postcard/03.png';
import image4 from '../assets/images/postcard/04.png';
import image5 from '../assets/images/postcard/05.png';
import image6 from '../assets/images/postcard/06.png';
import image7 from '../assets/images/postcard/07.png';
import image8 from '../assets/images/postcard/08.png';
import image9 from '../assets/images/postcard/09.png';
import image10 from '../assets/images/postcard/10.png';
import image11 from '../assets/images/postcard/11.png';
import image12 from '../assets/images/postcard/12.png';
import image13 from '../assets/images/postcard/13.png';
import image14 from '../assets/images/postcard/14.png';

function SendAxiosRequest(requestUrl) {
  /**
   * This code imports local images so that the api can link to.
   * Without importing, images do not appear on the page when uploaded to gh-pages.
   * Added to array to avoid terminal warning.
   */
  const imagePack = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
  ];
  console.log('Is images imported to build version: ', imagePack.length > 0); // eslint-disable-line no-console

  return axios.get(requestUrl).then((response) => {
    return response.data;
  });
}

export default SendAxiosRequest;
