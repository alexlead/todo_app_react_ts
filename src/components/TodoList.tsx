import React, { FC, ChangeEvent, useState } from 'react'
import Task from './Task';

const TodoList: FC = () => {
    const [taskList, setTaskList] = useState<string[]>([]);
    const [completeTaskList, setCompleteTaskList] = useState<string[]>([]);
    const [task, setTask] = useState<string>("");


    const handleChangeTask = (e: ChangeEvent<HTMLInputElement>): void => {
        setTask(e.target.value);
    }

    const handleAddTask = (): void => {
        setTaskList((prev) => [...prev, task]);
        setTask("");
    }

    const removeTaskFromList = (task:string):void => {
        removeCompleteTask(task);
        setTaskList(taskList.filter(fTask => fTask !== task));

    }

    const handleCompleteTask = (task: string): void => {
        setCompleteTaskList([...completeTaskList, task]);
    }

    const removeCompleteTask = (task: string): void => {
        setCompleteTaskList(completeTaskList.filter(fTask => fTask !== task));
    }

    const checkCompleteTask = (task: string): boolean => {
        return (completeTaskList.filter(item => item === task).length > 0);
    }

    return (
        <div className='todoapp'>
            <div className="todoapp__header">
                <h1>TodoList App</h1>
                <input type="text" onChange={(e): void => { handleChangeTask(e) }} value={task} placeholder="Enter your tasck..." />
                <button onClick={handleAddTask}>Add task</button>
            </div>
            <div className="todoapp__list">
                <ol>
                    {taskList.map((task, index) => (
                        <Task
                            key={index}
                            task={task}
                            checkCompleteTask={checkCompleteTask} 
                            handleCompleteTask={handleCompleteTask}
                            removeCompleteTask={removeCompleteTask}
                            removeTaskFromList={removeTaskFromList}
                        />))}

                </ol>
            </div>
        </div>
    )
}

export default TodoList