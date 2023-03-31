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

import { salesData } from '../data/chart.data';

function SalesChart() {
  return (
    <BarChart
      width={430}
      height={300}
      data={salesData}
      layout='vertical'
      style={{ fontSize: '10px' }}
    >
      <XAxis axisLine={false} tickLine={false} dataKey='uv' type='number' />

      <YAxis
        dataKey='name'
        type='category'
        width={100}
        axisLine={false}
        tickLine={false}
      />

      <Bar dataKey='uv' fill='#183E7E' />
    </BarChart>
  );
}

export default SalesChart;
