import { HeaderNav } from "../HeaderNav/HeaderNav";
import "./Footer.scss";
import gitIcon from "../../assets/icons/iconmonstr-github-1.svg";
import figmaIcon from "../../assets/icons/figma.svg";

export function Footer() {
    return(
        <footer className="footer">
            <a className="footer__logo uppercase" href="#">fashion</a>
            {(window.innerWidth > 767 && <HeaderNav/>)}
            <div className="footer__socials">
                <a 
                    href="https://github.com/winfar3/onix-internship"
                    className="footer-socials__item"
                >
                    <img src={gitIcon} alt="Link to github" />
                </a>
                <a 
                    href="https://www.figma.com/file/tGrUfiGxJo6Ahku54c7l5f/Fashion-Blog-Template?node-id=0%3A1"
                    className="footer-socials__item"
                >
                    <img src={figmaIcon} alt="Link to desing" />
                </a>
            </div>
            <p className="footer__copyright">Desing @ 2019 Logwork | Project @ 2022 Tsegelnik Bogdan</p>
        </footer>
    );
}