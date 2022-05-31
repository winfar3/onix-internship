import "./UserCard.scss"

export default function UserCard( {user} ) {
  return(
    <article className="userCard">
      <h3 className="userCard__name">{user.name}</h3>
      <ul className="userCard__list userCard-list">
        <li className="userCard-list__item">
          <a href={`mailto: ${user.email}`} className="userCard__link">{user.email}</a>
        </li>
        <li className="userCard-list__item">
          <a href={`tel: ${user.phone}`} className="userCard__link">{user.phone}</a>
        </li>
        <li className="userCard-list__item">
          <a href={user.website} className="userCard__link">{user.website}</a>
        </li>
      </ul>
    </article>
  )
}