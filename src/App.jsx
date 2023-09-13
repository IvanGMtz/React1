import { useState, useEffect } from 'react'
import {TaskCreator} from './components/TaskCreator'

function App() {

  const [taskItems, setTasksItems] = useState([]);

  const createNewTask = (taskName)=>{
    if(!taskItems.find(task => task.name === taskName)){
      setTasksItems([... taskItems, {name: taskName, done: false}])
    }
    
  }

  useEffect(()=>{
    let data = localStorage.getItem('tasks')
    if(data){
      setTasksItems(JSON.parse(data))
    }
  }, [  ])

  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(taskItems))
  }, [ taskItems ])

  return (

    <>
      <div className='container text-center'>
        <TaskCreator createNewTask={createNewTask} />

        <table>
          <thead>
            <tr>
              <th>Tasks</th>
            </tr>
          </thead>
          <tbody>
              {
              taskItems.map(task=>(
                <tr key={task.name}>
                  <td>
                    {task.name}
                  </td>
                </tr>
              ))
              }
          </tbody>
        </table>
        
      </div>
    </>
  )
}

export default App
