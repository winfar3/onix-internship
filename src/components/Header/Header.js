import "./Header.scss";
import HeaderNav from "../HeaderNav/HeaderNav";
import { NavLink } from "react-router-dom";

export function Header() {
    return (
        <header className="header">
            <div className="header__wrapper">
                <NavLink className="header__logo uppercase" to="/">fashion</NavLink>
                <HeaderNav isNeedBurger={true}/>
            </div>
        </header>
    );
}