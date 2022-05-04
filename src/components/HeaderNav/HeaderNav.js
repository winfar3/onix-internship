import "./HeaderNav.scss";

import React, { useState } from "react";

import { Menu } from "../Menu/Menu.js";

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