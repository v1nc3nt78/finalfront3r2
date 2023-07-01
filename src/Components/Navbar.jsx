import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { myRoutes } from '../Routes/utilties/myRoutes';
import { useThemeStates } from '../Context/themeContext/ThemeContext';
import { themes } from '../Context/themeContext/themes';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Navbar = () => {
  const { theme, setTheme } = useThemeStates();

  const handleThemeChange = () => {
    const newTheme = theme === themes.light ? themes.dark : themes.light;
    setTheme(newTheme);
  };

  return (
    <nav
      style={{
        background: theme.background,
        color: theme.font,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      }}
    >
      <div className={styles.navbarLinksContainer}>
        <Link
          className={styles.navbarBrand}
          to={myRoutes.home}
          style={{ background: theme.background, color: theme.font }}
        >
          Home
        </Link>
        <Link
          className={styles.navbarBrand}
          to={myRoutes.contact}
          style={{ background: theme.background, color: theme.font }}
        >
          Contact
        </Link>
        <Link
          className={styles.navbarBrand}
          to={myRoutes.favs}
          style={{ background: theme.background, color: theme.font }}
        >
          Favs
        </Link>
      </div>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button
        onClick={handleThemeChange}
        style={{
          background: theme.background,
          color: theme.font,
          marginRight: '5vw',
        }}
      >
        Change theme
      </button>
    </nav>
  );
};

export default Navbar;
