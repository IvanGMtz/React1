import { useState } from 'react'

export const TaskCreator = ({createNewTask})=>{
    
    const [newTaskName, setNewTaskName] = useState('')
 
    const handleSubmit = (e)=>{
      e.preventDefault();
      createNewTask(newTaskName)
      setNewTaskName('')
    }

    return (
        <>
            <div className="row  mt-3 justify-content-center">
              <div className="col-3">
                <form onSubmit={handleSubmit}>
                <input type="text" 
                placeholder='Enter a new task'
                onChange={(e)=> setNewTaskName(e.target.value)}
                value={newTaskName}
                />
    
                <button>Save task</button>
                </form>
              </div>
            </div>
        </>
      )
}