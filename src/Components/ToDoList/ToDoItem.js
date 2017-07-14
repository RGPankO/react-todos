import React from 'react';
import './ToDoItem.css';
export default function ToDoItem(props){

    return(
        <li
            key={props.id}
            className={"todo-item"+(props.finished ? ' finished':'')}
        >
            <span onClick={props.handleClick}>{props.name} </span>
            <span onClick={props.handleDelete}>[x]</span>
        </li>
    );
}
