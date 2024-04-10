import React from "react";
import { useState } from 'react';
import ListItem from "./ListItem";
import ButtonDelete from "./ButtonDelete";

const ToDoList = () => {
    const initValues = [
        {id: 1, name: 'one'},
        {id: 2, name: 'two'},
        {id: 3, name: 'thee'},
    ]
    const [input, setInput] = useState(``);
    const [item, setItem] = useState(initValues);

    const onClickHandler = (input) => {
        const updatedElement = [...item, { id: 5, name: input}];
        setItem(updatedElement);
        setInput('');
    };

    const onChangeHandler = (e) => {
        const value = e.target.value;
        setInput(value);
    };

    const onEnterHandler = (e) => { 
        if (e.key === 'Enter') {
             const updatedElement = [...item, { id: 5, name: input}];
        setItem(updatedElement);
        setInput('');
        }
    };

    const handleDelete = (id) => {
        const filteredItem = item.filter((item) => item.id !== id);
        setItem(filteredItem);
    }

    return (
        <>
            <input onKeyDown={onEnterHandler} onChange={onChangeHandler} value={input} />
            <button onClick={() => onClickHandler(input)}>Add new To Do</button>
            <h2>{item.length }</h2>
            <ul>
                {item.map((element) => (
                    <ListItem key={element.id} id={element.id} name={element.name}>
                        {<ButtonDelete text={"delete"} onClick={() => handleDelete(element.id)} type={'button'} />}
                    </ListItem>
                ))}
            </ul>
            
        </>
    );
};

export default ToDoList;