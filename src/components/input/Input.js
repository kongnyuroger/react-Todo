import React from 'react';
import { useState } from 'react';
import './Input.css'
import Todo from '../list/Todo';

const Input = () => {
    const [todo, setTodo] = useState('')
    const [todoList, setTodoList] = useState([])
    const handleChange = (event) => {
        setTodo(event.target.value)
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        let temList = todoList;
        temList.push(todo);
        setTodoList(temList);
        console.log(todoList)
        setTodo('')
    }
    return (
        <>
            <div className='input-box' >
                <input type='text' value={todo} placeholder='enter item' onChange={handleChange}/>
                <button type='submit' onClick={handleSubmit}><i class="fa-solid fa-check"></i></button>
            </div>
            <div>{todoList.map((todoItem, idx) => (  
                <Todo index ={idx} todoItem={todoItem} todoList={todoList} setTodoList={setTodoList}></Todo>
                ))}
            </div>
       </>
    );
};

export default Input;