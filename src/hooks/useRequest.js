import { useEffect, useState } from 'react';

import SendAxiosRequest from '../helpers/SendAxiosRequest';

const useRequest = (apiUrl) => {
  const [requstedData, setRequstedData] = useState([]);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    setIsPending(true);
  
    SendAxiosRequest(apiUrl)
      .then((data) => {
        setRequstedData(data);
        setIsPending(false);
      })
      .catch(() => {
        setRequstedData([]);
        setIsPending(false);
      });
  }, []);

  return [requstedData, isPending];
};

export default useRequest;
