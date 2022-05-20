import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export function Menu({ active, setActive }) {
  const navData = ["home", "recipes", "articles", "contact", "purchase"];
  const linkRoot = "/onix-internship/";

  const [title, setTitle] = useState("");

  useEffect(() => {
    document.title = `Fasion ${title}`;
  });

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
              onClick={() => setTitle(item)}
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
