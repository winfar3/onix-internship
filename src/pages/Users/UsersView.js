import PropTypes from 'prop-types';

import UserCard from '../../components/UserCard/UserCard';
import Layout from '../../layout/Layout';

function UsersView({ dataFromServer }) {
  return (
    <Layout>
      <main className="main">
        {dataFromServer.map((item) => (
          <UserCard user={item} key={item.id} />
        ))}
      </main>
    </Layout>
  );
}

UsersView.propTypes = {
  dataFromServer: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default UsersView;
