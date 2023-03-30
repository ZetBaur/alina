import { Link, NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';
import './Menu.scss';

import { MdOutlineDashboard } from 'react-icons/md';
import { MdOutlineLibraryBooks } from 'react-icons/md';
import { MdOutlineLibraryAddCheck } from 'react-icons/md';
import { MdOutlineLibraryAdd } from 'react-icons/md';
import { MdOutlineDisabledByDefault } from 'react-icons/md';

const Menu = () => {
  return (
    <div className={styles.menu}>
      <Link className={styles.logo} to='/'>
        Alina
      </Link>

      <nav className={styles.nav}>
        <NavLink className={styles.navLink} to='.' end>
          <MdOutlineDashboard size={25} />
          <span className={styles.navName}>Дашборд</span>
        </NavLink>

        <NavLink className={styles.navLink} to='requests'>
          <MdOutlineLibraryBooks size={25} />
          <span className={styles.navName}>Мои заявки</span>
        </NavLink>

        <NavLink className={styles.navLink} to='newrequest'>
          <MdOutlineLibraryAdd size={25} />
          <span className={styles.navName}>Новая заявка</span>
        </NavLink>

        <NavLink className={styles.navLink} to='agreedrequests'>
          <MdOutlineLibraryAddCheck size={25} />
          <span className={styles.navName}>Согласованные заявки</span>
        </NavLink>

        <NavLink className={styles.navLink} to='declinedrequests'>
          <MdOutlineDisabledByDefault size={25} />
          <span className={styles.navName}>Отклоненные заявки</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Menu;
