import PropTypes from 'prop-types';

import UserCard from '../../components/UserCard/UserCard';

function UsersView({ dataFromServer }) {
  return (
    <main className="main">
      {dataFromServer.map((item) => (
        <UserCard user={item} key={item.id} />
      ))}
    </main>
  );
}

UsersView.propTypes = {
  dataFromServer: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default UsersView;
