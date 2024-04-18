import React from 'react';
import styles from './ToDoList.module.css'

const ButtonDelete = (props) => {
    return (
        <button className={styles.btnDelete} type={props.type} onClick={props.onClick}>
            {props.text}
        </button>
    );
};

export default ButtonDelete;
