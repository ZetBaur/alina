import { Outlet } from 'react-router-dom';

import { Header, Menu, ScreenWrapper } from '../components';
import styles from './MainLayout.module.scss';

const MainLayout = () => {
  return (
    <>
      <Menu />

      <main className={styles.main}>
        <Header />

        <ScreenWrapper>
          <Outlet />
        </ScreenWrapper>
      </main>
    </>
  );
};

export default MainLayout;
