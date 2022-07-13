import PropTypes from 'prop-types';

import UserCard from '../../components/UserCard/UserCard';
import Layout from '../../layout/Layout';

function UsersView({ dataFromServer, refreshData }) {
  return (
    <Layout>
      <main className="main">
        <div className="grid-span-2">
          <button className="button" type="button" onClick={refreshData}>Refresh</button>
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
};

export default UsersView;
