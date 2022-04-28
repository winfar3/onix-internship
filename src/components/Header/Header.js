import "./Header.scss";
import { HeaderNav } from "../HeaderNav/HeaderNav";

export function Header() {
    return (
        <header className="header">
            <div className="header__wrapper">
                <a className="header__logo uppercase" href="/">fashion</a>
                <HeaderNav/>
            </div>
        </header>
    );
}