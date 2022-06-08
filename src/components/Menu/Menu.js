import classNames from "classnames";

import { useEffect, useState } from "react";
import MenuView from "./MenuView";

export function Menu({ active }) {
  const navData = ["home", "recipes", "articles", "users"];
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
    <MenuView 
      navData={navData}
      classNames={classNames('header-nav__list', {'header-nav__list_active' : active})}
      linkRoot={linkRoot}
      setTitle={setTitle}
    />
  );
}
