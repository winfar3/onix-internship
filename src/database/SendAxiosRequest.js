import axios from 'axios';

import image12 from "../assets/images/postcard/12.png";
import image13 from "../assets/images/postcard/13.png";
import image14 from "../assets/images/postcard/14.png";

function SendAxiosRequest(requestUrl) {
  return(
    axios.get(requestUrl)
     .then((response) => {
      return response.data
     })
  )
}

export default SendAxiosRequest