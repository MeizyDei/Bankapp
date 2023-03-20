import * as React from 'react';
import { Input } from 'antd';
import {useEffect, useRef, useState} from "react";



export function TaskForm (props) {

    const [input, setInput] = useState('');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    });

    const handleChange = e => {
        setInput(e.target.value);
    };
    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 100000),
            text: input
        });

        setInput('');
    };


    return (
        <div className="container">
            <form className="input-container" onSubmit={handleSubmit}>
                <Input
                    id="input"
                    name="input"
                    placeholder="+ Add a task"
                    value={input}
                    onChange={handleChange}
                    ref={inputRef}
                />
            </form>

        </div>
    )
}

