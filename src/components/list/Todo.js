import React from 'react';
import './Todo.css';

const Todo = ({todoItem, todoList, setTodoList, index}) => {
    const deleteTodo = () => {
        const updatedTodo = todoList.filter(item => todoList.indexOf(item) != todoList.indexOf(todoItem));
        setTodoList(updatedTodo)
        console.log(index)
       
    };
    return (
        <div className='todo'>
            <h3 key={index}>{todoItem}</h3>
                <button onClick={deleteTodo} ><i class="fa-solid fa-trash"></i></button>
        </div>
    );
};

export default Todo;