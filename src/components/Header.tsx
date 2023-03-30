import styles from './Header.module.scss';
import Widget from './Widget';

import { useAppSelector } from '../hooks/reduxHooks';

function Header() {
  const { pageTitle } = useAppSelector((state) => state.headerSlice);

  return (
    <header className={styles.header}>
      <span className={styles.pageTitle}> {pageTitle}</span>

      <Widget />
    </header>
  );
}

export default Header;
