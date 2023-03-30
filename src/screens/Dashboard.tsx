import { useAppDispatch } from '../hooks/reduxHooks';
import { useEffect, useState } from 'react';
import { setPageTitle } from '../features/header/header.slice';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import styles from './Dashboard.module.scss';
import { data } from '../data/chart.data';

function Dashboard() {
  // const [data, setData] = useState();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setPageTitle('Дашборд: Анализ заявок компании'));
  }, []);

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Area
          type='monotone'
          dataKey='uv'
          stackId='1'
          stroke='#8884d8'
          fill='#8884d8'
        />
        <Area
          type='monotone'
          dataKey='pv'
          stackId='1'
          stroke='#82ca9d'
          fill='#82ca9d'
        />
        <Area
          type='monotone'
          dataKey='amt'
          stackId='1'
          stroke='#ffc658'
          fill='#ffc658'
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default Dashboard;
