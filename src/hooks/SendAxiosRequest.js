import axios from 'axios';

function SendAxiosRequest(requestUrl) {
  return axios.get(requestUrl).then((response) => {
    return response.data;
  });
}

export default SendAxiosRequest;
