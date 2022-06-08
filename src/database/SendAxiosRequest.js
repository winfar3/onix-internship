import axios from 'axios';

import image1 from "../assets/images/postcard/01.png";
import image2 from "../assets/images/postcard/02.png";
import image3 from "../assets/images/postcard/03.png";
import image4 from "../assets/images/postcard/04.png";
import image5 from "../assets/images/postcard/05.png";
import image6 from "../assets/images/postcard/06.png";
import image7 from "../assets/images/postcard/07.png";
import image8 from "../assets/images/postcard/08.png";
import image9 from "../assets/images/postcard/09.png";
import image10 from "../assets/images/postcard/10.png";
import image11 from "../assets/images/postcard/11.png";

function SendAxiosRequest() {
  const requstUrl = "https://61fc04453f1e34001792c787.mockapi.io/posts"
  
  return(
    axios.get(requstUrl)
     .then((response) => {
      return response.data
     })
  )
}

export default SendAxiosRequest