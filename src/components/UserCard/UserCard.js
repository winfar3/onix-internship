import "./UserCard.scss"

import PropTypes from 'prop-types'

function UserCard( {user} ) {
  return(
    <article className="userCard">
      <div className="userCard__avatar">
        <img src={user.avatar} alt="user avatar" />
      </div>
      <h3 className="userCard__name">{user.name}</h3>
      <p className="userCard__joined-data">{`Joined at ${user.createdAt}`}</p>
    </article>
  )
}

UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    avatar: PropTypes.string,
    createdAt: PropTypes.string,
  })
}

export default UserCard