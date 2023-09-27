import React from 'react'
import {Chart as ChartJS, BarElement, CategoryScale, LinearScale, Category, Tooltip, Legend} from 'chart.js'
import {Bar} from 'react-chartjs-2'

ChartJS.register(
  BarElement, CategoryScale, LinearScale, Tooltip, Legend
)


function BarGraphsecond() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'],
    datasets: [
      {
        data: [30, 35, 55, 50, 52,62,50,82,62,30,55,75],
        backgroundColor: '#FDB21C',
        barThickness: 20, 
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
    plugins:{
      legend:{
        display:false,
      },
      tooltip: {
        mode: 'index',
        callbacks: {
          label: function (context) {
            // return context.dataset.data[context.dataIndex] + '%'; 
            return 'Invoice Accuracy '+context.dataset.data[context.dataIndex] + '%'; 
          },

          title:function(){
            return '';
          }
        },
        displayColors: false
      },
    }
  };

  return (
    <div className='BarGraphsecond'>
      <h3 style={{margin: '5px'}}>Average Invoice Accuracy</h3>
      <div style={
        {
          padding: '1px',
          width: '500px',
          height: '300px'
      }
      }>
        <Bar 
        data={data}
        options = {options}></Bar>
      </div>
      
    </div>
  )
}
export default BarGraphsecond;


