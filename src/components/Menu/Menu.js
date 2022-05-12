import { NavLink } from "react-router-dom";

export function Menu({ active, setActive }) {
  const navData = ["home", "recipes", "article", "contact", "purchase"];
  const linkRoot = "/onix-internship/";

  if (active) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = "auto"
  };
  
  return (
    <nav className="header__nav header-nav">
      <ul
        className={
          active
            ? "header-nav__list header-nav__list_active"
            : "header-nav__list"
        }
      >
        {navData.map((item) => (
          <li key={item} className="header-nav__item">
            <NavLink
              to={linkRoot + item}
              className="header-nav__link capitalize"
            >
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
