import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';

import SendAxiosRequest from '../helpers/SendAxiosRequest';

const useRequest = (apiUrl, storeDirectory) => {
  const dispatch = useDispatch();
  const [requstedData, setRequstedData] = useState([]);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    setIsPending(true);
  
    SendAxiosRequest(apiUrl)
      .then((data) => {
        setRequstedData(data);
        dispatch({ type: storeDirectory, storeData: data });
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
