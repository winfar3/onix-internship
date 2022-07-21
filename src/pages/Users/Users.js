import './Users.scss';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';

import UsersView from './UsersView';
import { baseUrl, usersRequestUrl } from '../../constants/requestUrls';
import Loader from '../../components/Loader/Loader';
import useLocalization from '../../hooks/useLocalization';
import usersHandler from '../../store/users/actions';
import Layout from '../../layout/Layout';

// TODO: Learn how to do it well, not like this
function Users() {
  const dispatch = useDispatch();
  const dataFromRedux = useSelector(({ users }) => users.users);
  const [t] = useLocalization();
  const [refreshing, setRefreshing] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const request = () => {
    dispatch(usersHandler(`${baseUrl}${usersRequestUrl}`, setRefreshing, setIsPending));
  };
  
  const refresh = () => {
    setRefreshing(true);
    request();
  };

  useEffect(() => {
    if (dataFromRedux.length === 0) {
      setIsPending(true);
      request();
    }
  }, []);
    
  if (isPending) {
    return (
      <Layout>
        <Loader />
      </Layout>
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
