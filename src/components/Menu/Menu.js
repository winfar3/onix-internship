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

function Menu({ active, menuActiveHandler }) {
  const navData = ['home', 'recipes', 'articles', 'users', 'travels'];
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
    />
  );
}

Menu.propTypes = {
  active: PropTypes.bool.isRequired,
  menuActiveHandler: PropTypes.func.isRequired,
};

export default Menu;
