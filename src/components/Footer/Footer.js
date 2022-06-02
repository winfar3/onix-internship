import "./Footer.scss";

import HeaderNav from "../HeaderNav/HeaderNav";
import { NavLink } from "react-router-dom";

import gitIcon from "../../assets/icons/iconmonstr-github-1.svg";
import figmaIcon from "../../assets/icons/figma.svg";

export function Footer() {
    const gitLink = "https://github.com/winfar3/onix-internship";
    const figmaLink = "https://www.figma.com/file/tGrUfiGxJo6Ahku54c7l5f/Fashion-Blog-Template?node-id=0%3A1";

    return(
        <footer className="footer">
            <NavLink className="footer__logo uppercase" to="/">fashion</NavLink>
            <HeaderNav />
            <div className="footer__socials">
                <a 
                    href={gitLink}
                    className="footer-socials__item"
                >
                    <img src={gitIcon} alt="Link to github" />
                </a>
                <a 
                    href={figmaLink}
                    className="footer-socials__item"
                >
                    <img src={figmaIcon} alt="Link to desing" />
                </a>
            </div>
            <p className="footer__copyright">Desing @ 2019 Logwork | Project @ 2022 Tsegelnik Bogdan</p>
        </footer>
    );
}