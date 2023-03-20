import React, {useState} from 'react';
import TaskController from './TaskController';
import {TaskForm} from "./TaskForm";

function TaskList() {
    const [tasks, setTasks] = useState([])

    const addTask = e => {
        if(!e.text || /^\s*$/.test(e.text)){
            return;
        }

        const newTasks = [e, ...tasks];
        setTasks(newTasks);
        console.log(e)
    };

    const updateTask = (taskId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTasks(prev => prev.map(item => (item.id === taskId ? newValue : item)));
    };

    const removeTask = e => {
        const removeArr = [...tasks].filter(task => task.id !== e)

        setTasks(removeArr);
    }


    const completeTask = e => {
        let updatedTasks = tasks.map(task => {
            if(task.id === e) {
                task.isComplete = !task.isComplete;
            }
            return task;
        });
        setTasks(updatedTasks);
    }


    return (
        <div>
            <TaskForm onSubmit={addTask}/>
            <TaskController tasks={tasks} completeTask={completeTask} removeTask={removeTask} updateTask={updateTask} />
        </div>
    )
}

export default TaskList;