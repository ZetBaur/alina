import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Menu from '../components/Menu';
import styles from './MainLayout.module.scss';

const MainLayout = () => {
  return (
    <>
      <Menu />

      <main className={styles.main}>
        <Header />
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
