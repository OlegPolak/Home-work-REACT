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

    return (
        <>
            <input onChange={onChangeHandler} value={input} />
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