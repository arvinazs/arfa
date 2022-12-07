// import * as React from 'react';
// import { Bar } from 'react-chartjs-2';

// const BarChart = () => {
//   const labels = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//   ];

//   const data = {
//     labels: labels,
//     datasets: [
//       {
//         id: '1',
//         label: 'My First dataset',
//         backgroundColor: 'rgb(255, 99, 132)',
//         borderColor: 'rgb(255, 99, 132)',
//         data: [0, 10, 5, 2, 20, 30, 45],
//       },
//       {
//         id: '2',
//         label: 'My Second dataset',
//         backgroundColor: 'rgb(99, 169, 255)',
//         borderColor: 'rgb(99, 169, 255)',
//         data: [55, 20, 5, 2, 10, 3, 26],
//       },
//     ],
//   };
//   return (
//     <div className="chart">
//       <Bar data={data} />
//     </div>
//   );
// };

// export default BarChart;



import * as React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
      {
        id: '1',
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [4, 10, 5, 2, 20, 30, 45],
      },
      {
        id: '2',
        label: 'My Second dataset',
        backgroundColor: 'rgb(99, 169, 255)',
        borderColor: 'rgb(99, 169, 255)',
        data: [55, 20, 5, 2, 10, 3, 26],
      },
  ],
};

const Chart = () => {
  return <Bar options={options} data={data} />;
}

export default Chart;
