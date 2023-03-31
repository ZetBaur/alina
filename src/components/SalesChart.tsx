import { FunctionComponent } from 'react';

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import styles from './SalesChart.module.scss';

import Title from './Title';

import { salesData } from '../data/chart.data';

const CustomizedAxisTick: FunctionComponent<any> = (props: any) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text dy={16} textAnchor='end' fill='#666'>
        {payload.value + ' млн'}
      </text>
    </g>
  );
};

function SalesChart() {
  return (
    <>
      {/* <div className={styles.title}>График курса валют</div>
       */}

      {/* <Title>Продажи по Казахстану</Title> */}

      <Title title='Продажи по Казахстану' feature='за год' />

      <BarChart
        width={430}
        height={300}
        data={salesData}
        layout='vertical'
        style={{ fontSize: '10px' }}
      >
        <XAxis
          tick={<CustomizedAxisTick />}
          axisLine={false}
          tickLine={false}
          dataKey='uv'
          type='number'
        />

        <YAxis
          dataKey='name'
          type='category'
          width={100}
          axisLine={false}
          tickLine={false}
        />

        <Bar dataKey='uv' fill='#183E7E' />
      </BarChart>
    </>
  );
}

export default SalesChart;
