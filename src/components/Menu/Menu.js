import classNames from "classnames";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export function Menu({ active }) {
  const navData = ["home", "recipes", "articles", "users", "characters"];
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
          classNames('header-nav__list', {'header-nav__list_active' : active})
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
