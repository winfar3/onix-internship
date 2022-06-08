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

export default UserCard