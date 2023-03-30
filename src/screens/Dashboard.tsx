import { useAppDispatch } from '../hooks/reduxHooks';
import { useEffect } from 'react';
import Chart from '../components/Chart';

import { setPageTitle } from '../features/header/header.slice';

import styles from './Dashboard.module.scss';

function Dashboard() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setPageTitle('Дашборд: Анализ заявок компании'));
  }, []);

  return <Chart />;
}

export default Dashboard;
