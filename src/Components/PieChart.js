import React from 'react'
import {Chart as ChartJS, ArcElement,Tooltip, Legend} from 'chart.js'

import {Doughnut} from 'react-chartjs-2'

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)


function PieChart() {
    
    const data = {
        labels: ['On Time 69%','Early 23%','Late 8%'],
        datasets:[
            {
                data: [69,23,8],
                backgroundColor: ['#0FB5AE','#4046CA','#F68524'],
                borderWidth: 0,
            }
        ]
    }

    const options = {
        plugins: {
            legend: {
                display: true,
                labels: {
                  boxWidth: 100, // Set the width of the legend box (square)
                  usePointStyle: true, // Use a square as the legend marker
                },
              },
          tooltip: {
            callbacks: {
              label: function (context) {
                const label = context.label || '';
                const value = context.parsed || 0;
                return ' Delivery ' + value + ' %';
              },
            },
          },
        },
        
      };


  return (
    <div>
        <div style={ {
          padding: '20px',
          width: '80%',
          height: '250px'
      }}>
        <Doughnut data={data}
            options={options}>

        </Doughnut>

        </div>
    </div>
  )
}

export default PieChart