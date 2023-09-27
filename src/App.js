// import React from 'react'
// import {Chart as ChartJS, BarElement, CategoryScale, LinearScale, Category, Tooltip, Legend} from 'chart.js'
// import {Bar} from 'react-chartjs-2'
// import BarGraphsecond from './Components/BarGraphsecond';
// import PieChart from './Components/PieChart';

// ChartJS.register(
//   BarElement, CategoryScale, LinearScale, Tooltip, Legend
// )


// function App() {
//   const data = {
//     labels: ['1st Qtr.', '2nd Qtr.', '3rd Qtr.', '4th Qtr.'],
//     datasets: [
//       {
//         data: [70, 30, 60, 90],
//         backgroundColor: '#FDB21C',
//         barThickness: 50, 
//       },
//     ],
//   };
  
//  const options = {
//     scales: {
//       y: {
//         beginAtZero: true,
//         max: 100,
//         ticks: {
//           stepSize: 20,
//           callback: function (value) {
//             return value + '%';
//           },
//         },
//         grid: {
//           borderDash: [4, 4], 
//         },
//       },
//       x: {
//         grid: {
//           display: false,
//         },
//       },
//     },
//     plugins:{
//       legend:{
//         display:false,
//       },
//       tooltip: {
//         callbacks: {
//           label: function (context) {
//             return context.dataset.data[context.dataIndex] + '%'; 
//           },
//         },
//       },
//     }
//   };

//   return (
//     <div className='App'>
//       <PieChart />
//       <h3 style={{margin: '20px', display: 'flex'}}>Average Inventory Turns</h3>
//       <div style={
//         {
//           padding: '20px',
//           width: '40%',
//           height: '250px',
//       }
//       }>
//           <Bar 
//           data={data}
//           options = {options}></Bar>
//       </div>
//       <BarGraphsecond />
      
//     </div>
//   )
// }
// export default App;


import React from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Category, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import BarGraphsecond from './Components/BarGraphsecond';
import PieChart from './Components/PieChart';

ChartJS.register(
  BarElement, CategoryScale, LinearScale, Tooltip, Legend
)

function App() {
  const data = {
    labels: ['1st Qtr.', '2nd Qtr.', '3rd Qtr.', '4th Qtr.'],
    datasets: [
      {
        data: [70, 30, 60, 90],
        backgroundColor: '#FDB21C',
        barThickness: 50,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20,
          callback: function (value) {
            return value + '%';
          },
        },
        grid: {
          borderDash: [4, 4],
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return context.dataset.data[context.dataIndex] + '%';
          },
        },
      },
    },
  };

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Some Graph Examples</h1>
      <div style={{ display: 'flex', width: '90%', justifyContent: 'center' }}>
        <div style={{ flex: '50%' }}> {/* Equal width for pie chart and bar graph */}
          <PieChart />
        </div>
        <div style={{ flex: '50%' }}> {/* Equal width for pie chart and bar graph */}
          <h3 style={{ margin: '20px' }}>Average Inventory Turns</h3>
          <div style={{
            padding: '20px',
            width: '100%',
            height: '250px',
          }}>
            <Bar
              data={data}
              options={options}
            ></Bar>
          </div>
        </div>
      </div>
      <BarGraphsecond />
    </div>
  )
}

export default App;
