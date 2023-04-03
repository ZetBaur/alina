import { BarChart, Bar, XAxis, Legend, ResponsiveContainer } from 'recharts';
import { statisticsData } from '../data/chart.data';

function StatisticsChart() {
  return (
    <ResponsiveContainer width='100%' height='80%'>
      <BarChart
        style={{ fontSize: '10px' }}
        data={statisticsData}
        barCategoryGap='10%'
      >
        <XAxis dataKey='name' axisLine={false} tickLine={false} />
        <Legend iconType='square' />
        <Bar dataKey='закрытые' fill='red' barSize={15} />
        <Bar dataKey='новые' fill='blue' barSize={15} />
        <Bar dataKey='текущие' fill='orange' barSize={15} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default StatisticsChart;
