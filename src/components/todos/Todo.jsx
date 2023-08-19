import React from "react";
import './todo.css';

const Todo = function({item}) {

    return(<><div className={item.completed ? "todo todo_completed" : "todo"} key={item.id}>{ item.title }</div></>)
}

export default Todo;