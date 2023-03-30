import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { useEffect } from 'react';
import { setPageTitle } from '../features/header/header.slice';

function Dashboard() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log('mounted');
    dispatch(setPageTitle('Дашборд: Анализ заявок компании'));
  }, []);

  return <div>Dashboard</div>;
}

export default Dashboard;
