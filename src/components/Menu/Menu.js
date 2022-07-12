import classNames from 'classnames';

import { 
  useContext, 
  useEffect, 
  useRef, 
  useState 
} from 'react';
import PropTypes from 'prop-types';

import MenuView from './MenuView';
import ThemeContext from '../../context/ThemeContext';
import useLocalization from '../../hooks/useLocalization';
import useLocalStorage from '../../hooks/useLocalStorage';

function Menu({ active, menuActiveHandler }) {
  const [t, changeLang] = useLocalization();
  const [activeLanguage] = useLocalStorage(null, 'i18nextLng');
  const navData = [
    {
      url: '',
      title: t('home'), 
    },
    {
      url: 'comments',
      title: t('comments'), 
    },
    {
      url: 'articles',
      title: t('articles'), 
    },
    {
      url: 'users',
      title: t('users'), 
    },
    {
      url: 'travels',
      title: t('travels')
    },
  ];
  const linkRoot = '/onix-internship/';

  const [title, setTitle] = useState('');
  useEffect(() => {
    document.title = `Fasion ${title}`;
  });

  /**
   * Locks page scrolling when the menu is open on phones
   */
  const bodyElement = useRef(document.body);
  useEffect(() => {
    if (active) {
      bodyElement.current.classList.add('lock');
    } else {
      bodyElement.current.classList.remove('lock');
    }
  }, [active]);

  const { isDark, setIsDark } = useContext(ThemeContext);
  const themeToggle = () => {
    setIsDark((value) => !value);
  };
  useEffect(() => {
    if (isDark) {
      bodyElement.current.setAttribute('data-theme', 'dark');
    } else {
      bodyElement.current.removeAttribute('data-theme');
    }
  }, [isDark]);

  return (
    <MenuView 
      navData={navData}
      classNames={classNames('header-nav__list', { 'header-nav__list_active': active })}
      linkRoot={linkRoot}
      setTitle={setTitle}
      menuActiveHandler={menuActiveHandler}
      themeToggle={themeToggle}
      isDark={isDark}
      changeLang={changeLang}
      langEn={t('English')}
      langUa={t('Ukraine')}
      langRu={t('Russian')}
      activeLanguage={activeLanguage}
    />
  );
}

Menu.propTypes = {
  active: PropTypes.bool.isRequired,
  menuActiveHandler: PropTypes.func.isRequired,
};

export default Menu;
