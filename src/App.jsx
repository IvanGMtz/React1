import { useState } from 'react'
import {TaskCreator} from './components/TaskCreator'

function App() {

  const [taskItems, setTasksItems] = useState([
    {name: 'mi primer tarea', done: false},
    {name: 'mi segunda tarea', done: false},
    {name: 'mi tercera tarea', done: false}
  ]);

  const createNewTask = (taskName)=>{
    if(!taskItems.find(task => task.name === taskName)){
      setTasksItems([... taskItems, {name: taskName, done: false}])
    }
    
  }

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