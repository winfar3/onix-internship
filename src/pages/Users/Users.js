import './Users.scss';

import PropTypes from 'prop-types';

import UsersView from './UsersView';
import { usersRequestUrl } from '../../database/requestUrls';
import withRequest from '../../components/withRequest/withRequest';

function Users({ dataFromServer }) {
  return <UsersView dataFromServer={dataFromServer} />;
}

Users.propTypes = {
  dataFromServer: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default withRequest(Users, usersRequestUrl);
