import * as React from 'react';
import {Input} from 'antd';
import {useRef, useState} from "react";
import {Button} from "@mui/material";

export function TaskForm(props) {

    const [input, setInput] = useState('');
    const inputRef = useRef(null);

    const id = Math.floor(Math.random() * 100000);
    const handleChange = e => {
        setInput(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        const newTask = {id: Math.floor(Math.random() * 100000), text: input}; // create new object with id
        props.onSubmit(newTask);

        setInput('');

    };

    return (
        <div className="container">
            <form className="input-container" onSubmit={handleSubmit}
            >
                <Input
                    id="input"
                    name="input"
                    placeholder="+ Add a task"
                    value={input}
                    onChange={handleChange}
                    ref={inputRef}
                />
            </form>
            <Button variant="submit" onClick={handleSubmit}>Submit</Button>

        </div>
    )
}




