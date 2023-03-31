import { useAppDispatch } from '../hooks/reduxHooks';
import { useEffect } from 'react';
import CurrencyChart from '../components/CurrencyChart';
import SalesChart from '../components/SalesChart';
import styles from './Dashboard.module.scss';

import { setPageTitle } from '../features/header/header.slice';
import StatisticsChart from '../components/StatisticsChart';

function Dashboard() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setPageTitle('Дашборд: Анализ заявок компании'));
  }, []);

  return (
    <div className={styles.dashboard}>
      <CurrencyChart />
      <br />
      <br />

      <div className={styles.row}>
        <SalesChart />
        <StatisticsChart />
      </div>
    </div>
  );
}

export default Dashboard;
