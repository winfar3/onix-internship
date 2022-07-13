import './Users.scss';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';

import UsersView from './UsersView';
import { baseUrl, usersRequestUrl } from '../../constants/requestUrls';
import Loader from '../../components/Loader/Loader';
import useRequest from '../../hooks/useRequest';
import useLocalization from '../../hooks/useLocalization';
import USERS_HANDLER from '../../store/users/types';

function Users() {
  const dispatch = useDispatch();
  const dataFromRedux = useSelector(({ users }) => users.state);
  const [t] = useLocalization();
  const [dataFromServer, isPending] = useRequest(`${baseUrl}${usersRequestUrl}`);

  const include = () => {
    dispatch({ type: USERS_HANDLER, data: dataFromServer });
  };

  useEffect(() => {
    include();
  }, [dataFromServer]);

  if (isPending) {
    return (
      <div className="loader">
        <Loader />
      </div>
    );
  }
  if (dataFromServer.length === 0) {
    return <p className="fz-2">{t('postErr')}</p>;
  }
  return <UsersView dataFromServer={dataFromRedux} refreshData={include} />;
}

export default Users;
