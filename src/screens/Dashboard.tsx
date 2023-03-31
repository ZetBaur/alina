import { useAppDispatch } from '../hooks/reduxHooks';
import { useEffect } from 'react';
import CurrencyChart from '../components/CurrencyChart';
import SalesChart from '../components/SalesChart';
import StatisticsChart from '../components/StatisticsChart';
import styles from './Dashboard.module.scss';
import Title from '../components/Title';

import { setPageTitle } from '../features/header/header.slice';
import KpiChart from '../components/KpiChart';

function Dashboard() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setPageTitle('Дашборд: Анализ заявок компании'));
  }, []);

  return (
    <div className={styles.dashboard}>
      <div className={styles.upperRow}>
        <Title title='График курса валют' feature='Доллар' />

        <div className={styles.chart}>
          <CurrencyChart />
        </div>
      </div>

      <div className={styles.lowerRow}>
        <div className={styles.col1}>
          <Title title='Продажи по Казахстану' feature='за год' />

          <div className={styles.chart}>
            <SalesChart />
          </div>
        </div>

        <div className={styles.col2}>
          <Title title='Статистика заявок' feature='за год' />

          <div className={styles.chart}>
            <StatisticsChart />
          </div>
        </div>

        <div className={styles.col3}>
          <Title title='Статистика заявок' feature='за год' />

          <div className={styles.chart}>
            <KpiChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
