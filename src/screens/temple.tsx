import { useAppDispatch } from '../hooks/reduxHooks';
import { useEffect, useState } from 'react';
import { setPageTitle } from '../features/header/header.slice';
import { Line } from 'react-chartjs-2';
import styles from './Dashboard.module.scss';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    legend: {
      position: 'top' as const,
      display: false,
    },
    title: {
      display: true,
      text: 'График курса валют',
    },
  },
  // scales: {
  //   y: {
  //     type: 'linear' as const,
  //     display: true,
  //     position: 'left' as const,
  //   },
  //   y1: {
  //     type: 'linear' as const,
  //     display: true,
  //     position: 'right' as const,
  //     grid: {
  //       drawOnChartArea: false,
  //     },
  //   },
  // },
};

export const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      fill: true,
      // label: 'Dataset 1',
      data: [10, 20, 15, 45, 25],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      tension: 0.5,
      // yAxisID: 'y',
    },
    {
      fill: true,
      // label: 'Dataset 2',
      data: [25, 75, 88, 99, 32],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      tension: 0.5,
      // yAxisID: 'y1',
    },
  ],
};

function Dashboard() {
  // const [data, setData] = useState();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setPageTitle('Дашборд: Анализ заявок компании'));
  }, []);

  return (
    <div className={styles.dashboard}>
      <Line options={options} data={data} height={200} />
    </div>
  );
}

export default Dashboard;
