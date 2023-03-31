import { useAppDispatch } from '../hooks/reduxHooks';
import { useEffect } from 'react';
import CurrencyChart from '../components/CurrencyChart';
import SalesChart from '../components/SalesChart';
import StatisticsChart from '../components/StatisticsChart';
import styles from './Dashboard.module.scss';

import { setPageTitle } from '../features/header/header.slice';

function Dashboard() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setPageTitle('Дашборд: Анализ заявок компании'));
  }, []);

  return (
    <div className={styles.dashboard}>
      <div className={styles.upperRow}>
        <CurrencyChart />
      </div>

      <div className={styles.lowerRow}>
        <div className={styles.col1}>
          <SalesChart />
        </div>

        <div className={styles.col2}>
          <StatisticsChart />
        </div>

        <div className={styles.col3}>{/* <StatisticsChart /> */}</div>
      </div>
    </div>
  );
}

export default Dashboard;
