import classNames from "classnames";

import { useEffect, useRef, useState } from "react";
import MenuView from "./MenuView";

export function Menu({ active }) {
  const navData = ["home", "recipes", "articles", "users", "travels"];
  const linkRoot = "/onix-internship/";

  const bodyElement = useRef(document.body);
  const [title, setTitle] = useState("");

  useEffect(() => {
    document.title = `Fasion ${title}`;
  });

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
