import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';

const Menu = () => {
  return (
    <nav>
      <NavLink
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
        to='.'
        end
      >
        Home
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
        to='contacts'
      >
        Contacts
      </NavLink>
    </nav>
  );
};

export default Menu;
