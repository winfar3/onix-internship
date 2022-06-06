import axios from 'axios';

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