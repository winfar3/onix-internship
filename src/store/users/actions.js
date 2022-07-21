import SendAxiosRequest from '../../helpers/SendAxiosRequest';
import USERS_HANDLER from './types';

const usersHandler = (url, setRefreshing, setIsPending) => {
  return (dispatch) => {
    SendAxiosRequest(url)
      .then((data) => {
        dispatch({ type: USERS_HANDLER, storeData: data });
        setRefreshing(false);
        setIsPending(false);
      });
  };
};

export default usersHandler;
