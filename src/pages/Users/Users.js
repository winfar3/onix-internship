import './Users.scss';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';

import UsersView from './UsersView';
import { baseUrl, usersRequestUrl } from '../../constants/requestUrls';
import Loader from '../../components/Loader/Loader';
import SendAxiosRequest from '../../helpers/SendAxiosRequest';
import useRequest from '../../hooks/useRequest';
import useLocalization from '../../hooks/useLocalization';
import usersHandler from '../../store/users/actions';
import Layout from '../../layout/Layout';

// TODO: Learn how to do it well, not like this
function Users() {
  const dispatch = useDispatch();
  const dataFromRedux = useSelector(({ users }) => users.state);
  const [t] = useLocalization();
  const [dataFromServer, isPending] = useRequest(`${baseUrl}${usersRequestUrl}`);
  const [refreshing, setRefreshing] = useState(false);

  const refresh = () => {
    setRefreshing(true);
    SendAxiosRequest(`${baseUrl}${usersRequestUrl}`)
      .then((data) => {
        dispatch(usersHandler(data));
        setRefreshing(false);
      });
  };

  const include = () => {
    dispatch(usersHandler(dataFromServer));
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
  if (dataFromRedux.length === 0) {
  // TODO: refactoring
    return (
      <Layout>
        <main className="main">
          <div className="grid-span-2">
            <button className="button button_refresh" type="button" onClick={() => refresh()}>
              {refreshing ? <Loader /> : 'Refresh'}
            </button>
          </div>
          <p className="fz-2">{t('postErr')}</p>
        </main>
      </Layout>
    );
  }
  return <UsersView dataFromServer={dataFromRedux} refreshData={refresh} refreshing={refreshing} />;
}

export default Users;
