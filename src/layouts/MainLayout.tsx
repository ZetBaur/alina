import { Outlet } from 'react-router-dom';
import Menu from '../components/Menu';
import Widget from '../components/Widget';
import styles from './MainLayout.module.scss';

const MainLayout = () => {
  return (
    <>
      <Menu />

      <main className={styles.main}>
        <Widget />
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
