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
    <BarChart width={430} height={250} data={salesData} layout='vertical'>
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='name' />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey='pv' fill='#8884d8' />
      <Bar dataKey='uv' fill='#82ca9d' />
    </BarChart>
  );
}

export default SalesChart;
