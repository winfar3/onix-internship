import "./HeaderNav.scss";

import React, { useEffect, useState } from "react";

export function HeaderNav() {
    const [menuActive, setMenuActive] = useState(false);

    return (
        <div>
            <div 
                className={menuActive ? "header-nav__burger header-nav__burger_active" : "header-nav__burger"}
                onClick={() => setMenuActive(!menuActive)}
            >
                <span></span>
            </div>
            <Menu active={menuActive} setActive={setMenuActive}/>
        </div>
    );
}

function Menu({active, setActive}) {
    const navData = ["home", "recipes", "article", "contact", "purchase"]
    if (active ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto");
    return(
        <nav className="header__nav header-nav">
            <ul className={active ? "header-nav__list header-nav__list_active" : "header-nav__list"} >
                {navData.map(item => 
                    <li 
                        key={item}
                        className="header-nav__item"
                    >
                        <a 
                            href={item}
                            className="header-nav__link capitalize" 
                        >
                            {item}
                        </a>
                    </li>
                )}
            </ul>
        </nav>
    );
}