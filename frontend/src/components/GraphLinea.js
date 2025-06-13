import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

function GraphLinea({ datos, label, campo, color }) {
  const chartData = {
    labels: datos.map(d => d.timestamp),
    datasets: [
      {
        label: label,
        data: datos.map(d => d[campo]),
        fill: false,
        borderColor: color,
        tension: 0.2
      }
    ]
  };

  return <Line data={chartData} />;
}

export default GraphLinea;
