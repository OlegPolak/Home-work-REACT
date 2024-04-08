import React from "react";
import { useState } from 'react';

const ToDoList = () => {
    const [input, setInput] = useState(``);
    const [item, setItem] = useState([]);

    const onClickHandler = (input) => {
        const updatedElement = [...item, input];
        setItem(updatedElement);
        setInput('');
    };

    const onChangeHandler = (e) => {
        const value = e.target.value;
        setInput(value);
    };

    const onEnterHandler = (e) => { 
        if (e.key === 'Enter') {
             const updatedElement = [...item, input];
        setItem(updatedElement);
        setInput('');
        }
    };

    return (
        <>
            <input onKeyDown={onEnterHandler} onChange={onChangeHandler} value={input} />
            <h2>{item.length }</h2>
            <ul>
                {item.map((element, index) => (
                    <li key={`${element}${index}`}>
                        {element} {index}
                    </li>
                ))}
            </ul>
            <button onClick={() => onClickHandler(input)}>Add new To Do</button>
        </>
    );
};

export default ToDoList;