import styles from './Header.module.scss';
import Widget from './Widget';

import { useAppSelector } from '../hooks/reduxHooks';

function Header() {
  const { pageTitle } = useAppSelector((state) => state.headerSlice);

  console.log('pageTitle', pageTitle);

  return (
    <header className={styles.header}>
      <span className={styles.pageTitle}> {pageTitle}</span>

      <Widget />
    </header>
  );
}

export default Header;
