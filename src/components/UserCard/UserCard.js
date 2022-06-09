import PropTypes from "prop-types"

import UserCardView from "./UserCardView"

function UserCard({user}) {
  return(
    <UserCardView 
      name={user.name}
      avatar={user.avatar}
      createdAt={user.createdAt.split('T')[0]}
    />
  )
}

UserCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string,
    createdAt: PropTypes.string,
  }),
}

export default UserCard