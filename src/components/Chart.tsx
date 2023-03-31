import { FunctionComponent, PureComponent } from 'react';
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

const CustomizedAxisTick: FunctionComponent<any> = (props: any) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text dy={16} textAnchor='end' fill='#666'>
        {payload.value[0] === '0'
          ? payload.value.slice(1, 2)
          : payload.value.slice(0, 2)}
      </text>
    </g>
  );
};

function Chart() {
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <AreaChart width={500} height={400} data={data}>
        <CartesianGrid strokeDasharray='10' vertical={false} />

        <XAxis
          dataKey='name'
          axisLine={false}
          tickLine={false}
          tick={<CustomizedAxisTick />}
          // interval={0}
        />

        <YAxis axisLine={false} tickLine={false} />

        <Tooltip
          contentStyle={{
            background: '#30528B',
            color: '#fff',
            fontSize: '10px',
            borderRadius: '5px',
          }}
        />

        <Area
          type='monotone'
          dataKey='покупка'
          stackId='1'
          stroke='green'
          strokeWidth={2}
          fill='#CEDDEB'
        />

        <Area
          type='monotone'
          dataKey='продажа'
          stackId='2'
          stroke='red'
          strokeWidth={2}
          fill='#A4B6D5'
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default Chart;
