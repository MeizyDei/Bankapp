
import React, {useState} from 'react';
import TaskController from './TaskController';
import {TaskForm} from "./TaskForm";


function Task() {
    const [tasks, setTasks] = useState([]);

    const addTask = e => {
        if (!e.text || /^\s*$/.test(e.text)) {
            return;
        }

        const newTasks = [e, ...tasks];
        setTasks(newTasks);

        fetch("http://localhost:8080/task/add", {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({text: e.text})
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

        const updatedTask = [newValue, ...tasks]
        setTasks(updatedTask);

        fetch("http://localhost:8080/task/add", {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({text: newValue.text})
        })
            .then(() => {
                console.log(`Task ${taskId} updated`);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
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

        // const task = updatedTasks.find(task => task.id === e);
        // fetch(`http://localhost:8080/task/${e}`, {
        //     method: "PUT",
        //     headers: {"Content-type": "application/json"},
        //     body: JSON.stringify({isComplete: task.isComplete})
        // }).then(() => {
        //     console.log(`Task ${e} updated`);
        // });
    }

    return (
        <div>
            <TaskForm onSubmit={addTask}/>
            <TaskController tasks={tasks} completeTask={completeTask} removeTask={removeTask} updateTask={updateTask}/>
        </div>
    )
}

export default Task;

