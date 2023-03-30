import styles from './Chart.module.scss';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import { data } from '../data/chart.data';

function Chart() {
  return (
    <div className={styles.chart}>
      <div>График курса валют</div>
      <ResponsiveContainer width='100%' height='100%'>
        <AreaChart width={500} height={400} data={data}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />

          <Area
            type='monotone'
            dataKey='pv'
            stackId='1'
            stroke='#54C3A3'
            strokeWidth={2}
            fill='#A4B6D5'
          />
          <Area
            type='monotone'
            dataKey='uv'
            stackId='1'
            stroke='#E58C91'
            strokeWidth={2}
            fill='#CEDDEB'
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
