import './Users.scss';

import PropTypes from 'prop-types';

import UsersView from './UsersView';
import { usersRequestUrl } from '../../constants/requestUrls';
import withRequest from '../../hocs/withRequest/withRequest';

function Users({ dataFromServer }) {
  return <UsersView dataFromServer={dataFromServer} />;
}

Users.propTypes = {
  dataFromServer: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default withRequest(Users, usersRequestUrl);
