import SendAxiosRequest from '../../helpers/SendAxiosRequest';
import FILLING_STORAGE from './types';

const fillingStorageAction = (url, setIsPending) => {
  return (dispatch) => {
    SendAxiosRequest(url)
      .then((data) => {
        dispatch({ type: FILLING_STORAGE, storeData: data });
        setIsPending(false);
      });
  };
};

export default fillingStorageAction;
