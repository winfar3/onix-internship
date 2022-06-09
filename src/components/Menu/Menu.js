import classNames from "classnames";

import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import MenuView from "./MenuView";

function Menu({ active }) {
  const navData = ["home", "recipes", "articles", "users", "travels"];
  const linkRoot = "/onix-internship/";

  const [title, setTitle] = useState("");
  useEffect(() => {
    document.title = `Fasion ${title}`;
  });
  
  /**
   * Blocks page scrolling when the menu is open on phones
   */
  const bodyElement = useRef(document.body);
  if (active) {
    bodyElement.current.classList.add('lock');
  } else {
    bodyElement.current.classList.remove('lock');
  };
  
  return (
    <MenuView 
      navData={navData}
      classNames={classNames('header-nav__list', {'header-nav__list_active' : active})}
      linkRoot={linkRoot}
      setTitle={setTitle}
    />
  );
}

Menu.propTypes = {
  active: PropTypes.bool,
}

export default Menu