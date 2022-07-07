import './Users.scss';

import UsersView from './UsersView';
import { usersRequestUrl } from '../../constants/requestUrls';
import Loader from '../../components/Loader/Loader';
import useRequest from '../../hooks/useRequest';
import useLocalization from '../../hooks/useLocalization';

function Users() {
  const [t] = useLocalization();
  const [dataFromServer, isPending] = useRequest(usersRequestUrl);

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
  return <UsersView dataFromServer={dataFromServer} />;
}

export default Users;
