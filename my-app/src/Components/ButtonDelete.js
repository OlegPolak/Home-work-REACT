import React from 'react';

const ButtonDelete = (props) => {
    return (
        <button type={props.type} onClick={props.onClick}>
            {props.text}
        </button>
    );
};

export default ButtonDelete;
