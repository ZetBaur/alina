import { useAppDispatch } from '../hooks/reduxHooks';
import { useEffect } from 'react';
import Chart from '../components/Chart';
import styles from './Dashboard.module.scss';

import { setPageTitle } from '../features/header/header.slice';

function Dashboard() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setPageTitle('Дашборд: Анализ заявок компании'));
  }, []);

  return (
    <div className={styles.dashboard}>
      <div className={styles.title}>График курса валют</div>

      <Chart />

      <div></div>
    </div>
  );
}

export default Dashboard;
