import React, { ChangeEvent } from 'react'

interface TaskProps {
  task: string,
  checkCompleteTask: (task: string) => boolean,
  handleCompleteTask: (task: string) => void,
  removeCompleteTask: (task: string) => void,
  removeTaskFromList: (task: string) => void,
}

const Task = ({ task, checkCompleteTask, handleCompleteTask, removeCompleteTask, removeTaskFromList }: TaskProps) => {

  const complete:boolean = checkCompleteTask(task);
  const updateCheckboxStatus = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.checked) {
      handleCompleteTask(task);
    } else {
      removeCompleteTask(task);
    }
  }

  const completeClass = ():string => {
    return( complete ? 'complete task__name' : 'task__name' );

  }

  return (
    <li className='task'>
      <div className={ completeClass() }>{task}</div>
      <div className='task__tools'>
        <label><input type="checkbox" onChange={(e) => (updateCheckboxStatus(e))} defaultChecked={complete} value={task} /></label>
        <button onClick={()=>(removeTaskFromList(task))}>Remove</button>
      </div>
    </li>
  )
}

export default Task