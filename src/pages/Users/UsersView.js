import PropTypes from 'prop-types';
import Loader from '../../components/Loader/Loader';

import UserCard from '../../components/UserCard/UserCard';
import Layout from '../../layout/Layout';

function UsersView({ dataFromServer, refreshData, refreshing }) {
  return (
    <Layout>
      <main className="main">
        <div className="grid-span-2">
          <button className="button button_refresh" type="button" onClick={refreshData}>
            {refreshing ? <Loader /> : 'Refresh'}
          </button>
        </div>
        {dataFromServer.map((item) => (
          <UserCard user={item} key={item.id} />
        ))}
      </main>
    </Layout>
  );
}

UsersView.propTypes = {
  dataFromServer: PropTypes.arrayOf(PropTypes.shape).isRequired,
  refreshData: PropTypes.func.isRequired,
  refreshing: PropTypes.bool.isRequired,
};

export default UsersView;
