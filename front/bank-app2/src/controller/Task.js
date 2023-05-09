import React, {useState} from 'react';
import TaskController from './TaskController';
import {TaskForm} from "./TaskForm";


function Task() {
    const [tasks, setTasks] = useState([]);

    const addTask = task => {
        if (!task.text || /^\s*$/.test(task.text)) {
            return;
        }
        const newTask = {...task, id: Math.floor(Math.random() * 100000)}; // sukurti naują objektą su id
        const newTasks = [newTask, ...tasks];
        setTasks(newTasks);

        fetch("http://localhost:8080/task/add", {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(newTask) // siųsti naują objektą su id į backend'ą
        })
            .then(() => {
                console.log("New Task added");
            })
            .catch((error) => {
                console.error("Error:", error);
            });

    };

    const updateTask = (taskId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
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
            if (task.id === e) {
                task.isComplete = !task.isComplete;
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    return (
        <div>
            <TaskForm onSubmit={addTask}/>
            <TaskController tasks={tasks} completeTask={completeTask} removeTask={removeTask} updateTask={updateTask}/>
        </div>
    )
}

export default Task;

