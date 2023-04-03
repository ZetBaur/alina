import {
  PieChart,
  Pie,
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
          <Cell fill='green' />

          <Label value='+ 2%' position='center' style={{ fontSize: '20px' }} />
        </Pie>

        <Legend iconType='triangle' />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default KpiChart;
