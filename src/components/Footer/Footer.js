import './Footer.scss';

import { NavLink } from 'react-router-dom';

import HeaderNav from '../HeaderNav/HeaderNav';
import useLocalization from '../../hooks/useLocalization';

import gitIcon from '../../assets/icons/iconmonstr-github-1.svg';
import figmaIcon from '../../assets/icons/figma.svg';

function Footer() {
  const [t] = useLocalization();
  const gitLink = 'https://github.com/winfar3/onix-internship';
  const figmaLink = 'https://www.figma.com/file/tGrUfiGxJo6Ahku54c7l5f/Fashion-Blog-Template?node-id=0%3A1';

  return (
    <footer className="footer">
      <NavLink className="footer__logo uppercase" to="/">
        fashion
      </NavLink>
      <HeaderNav />
      <div className="footer__socials">
        <a href={gitLink} className="footer-socials__item">
          <img src={gitIcon} alt="Link to github" />
        </a>
        <a href={figmaLink} className="footer-socials__item">
          <img src={figmaIcon} alt="Link to desing" />
        </a>
      </div>
      <p className="footer__copyright">{t('footer_copyright')}</p>
    </footer>
  );
}

export default Footer;
