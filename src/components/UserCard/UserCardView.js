import './UserCard.scss';

import PropTypes from 'prop-types';

function UserCardView({ name, avatar, createdAt }) {
  return (
    <article className="userCard">
      <div className="userCard__avatar">
        <img src={avatar} alt="user avatar" />
      </div>
      <h3 className="userCard__name">{name}</h3>
      <p className="userCard__joined-data">{`Joined at ${createdAt}`}</p>
    </article>
  );
}

UserCardView.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default UserCardView;
