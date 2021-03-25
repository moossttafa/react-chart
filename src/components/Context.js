import React, { useState, useEffect } from 'react';
import {Bar , Line , Pie} from 'react-chartjs-2';
  
const url = 'https://marketune-visualization-test.herokuapp.com/getData'
 
const AppProvider = () => {
      const [goals, setGoals] = useState([]);

      const fetchMarketune = async () => {
      try{
        const response = await fetch(url)
        const data = await response.json();
          setGoals(data)
 
       }catch(erorr){
         console.log(erorr);
        }
      }
      useEffect(() => {
        fetchMarketune()
      }, [])
     
    return ( 
       <Chart goals={goals} />
    )
   }

export default AppProvider
  

  const Chart  = ({goals}) => {
 console.log("goals",goals)
 const {points_in , goal_type ,userid , points_out} = goals
      const data = {
        // labels:  {goals?.map((goal) => {goal.goal_type})}, x
        labels: goal_type,
        datasets: [
            {
                label: '2021-03-06T12:58:16.843Z',
                data: points_in,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
            },
        
        ]
    }
     return (
        
        <Bar data={data} options={{ 
            responsive: true
        }}/>
     )
}
