import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Legend,
  Label,
} from 'recharts';
import { kpiData } from '../data/chart.data';

function KpiChart() {
  return (
    <ResponsiveContainer width='100%' height='80%'>
      <PieChart style={{ fontSize: '10px' }}>
        <Pie data={kpiData} innerRadius={45} outerRadius={60} dataKey='value'>
          <Cell fill='#fff' />
          <Cell fill='red' />

          <Label value='63%' position='center' style={{ fontSize: '20px' }} />
        </Pie>

        <Legend iconType='triangle' />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default KpiChart;
