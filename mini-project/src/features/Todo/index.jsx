import React, { useEffect } from 'react';
import { useState } from 'react';
import TodoItem from './components/TodoItem';
import './style.scss'

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const listTodo = [
        {
            id:1,
            name:"Code",
            status:"new"
        },
        {
            id:2,
            name:"Eat",
            status:"completed"
        },
        {
            id:3,
            name:"Sleep",
            status:"new"
        }
    ]
    const [todoList,setTodoList] = useState(listTodo)
    const [filterdList, setFilteredList] = useState(todoList)
    const [newTodo,setNewTodo] = useState("")
   
    const handleToggle = (todo,idx)=>{
        const newTodoList = [...todoList]
        newTodoList[idx].status === 'new' ? newTodoList[idx].status = 'completed' : newTodoList[idx].status='new'
        setTodoList(newTodoList)
    }
    const handleFilterAll = ()=>{
       setFilteredList([...todoList])
    }
    const handleFilterCompleted = ()=>{
        const newList = [...todoList]
        setFilteredList(newList.filter(item=>item.status==='completed'))
    }
    const handleFilterNew = ()=>{
        const newList = [...todoList]
        setFilteredList(newList.filter(item=>item.status==='new'))
    }
    const handleAddTodo = ()=>{
        const newTodoList = [...todoList]
        const listId = newTodoList.map(item => item.id)
        newTodoList.push(
            {
                id:listId.sort((a,b)=>b-a)[0] + 1 || 1,
                name:newTodo,
                status:"new"
            }
        )
        setTodoList(newTodoList)
        setFilteredList(newTodoList)
    }
    const handleInputChange = (e)=>{
        setNewTodo(e.target.value)
    }
    const handleDelete = (id)=>{
        const newTodoList = [...todoList]
        setTodoList(newTodoList.filter(item=> item.id !==id))
        setFilteredList(newTodoList.filter(item=> item.id !==id))
    }
    const handleUpdate = ()=>{
        
    }
    return (
        <div className='todoApp'>
            <h2>Todo List:</h2>
            <div className='add-todo'>
            <input onChange={handleInputChange}/>
            <button onClick={handleAddTodo}>Add</button>
            </div>
            <>
                {filterdList.map((item,idx)=>(
                    <TodoItem key={item.id} idx={idx} todo={item} handleToggle={handleToggle} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
                ))}
            </>
            <button onClick={handleFilterAll}>All</button>
            <button onClick={handleFilterCompleted}>Completed</button>
            <button onClick={handleFilterNew}>New</button>
        </div>
    );
}

export default TodoFeature;