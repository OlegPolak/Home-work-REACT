import React from 'react'

const ListItem = (props) => {
    return (
        <>
         <li key={props.id}>{props.name}</li>
         {props.children}
        </>
  );
};

export default ListItem
