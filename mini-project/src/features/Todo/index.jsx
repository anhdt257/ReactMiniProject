import React, { useEffect } from 'react';
import { useState } from 'react';
import TodoItem from './components/TodoItem';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string'
import './style.scss'
import { useHistory, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';

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

    const location = useLocation()
    const history = useHistory()
    const match = useRouteMatch()
    const [todoList,setTodoList] = useState(listTodo)
    const [filterdStatus, setFilteredStatus] = useState(()=>{
        console.log(history)
        const params = queryString.parse(location.search)
        return params.status || 'all'
    })
    const [newTodo,setNewTodo] = useState("")
    useEffect(()=>{
        const params = queryString.parse(location.search)
        setFilteredStatus(params.status || 'all')
    },[location.search])
    const handleToggle = (todo,idx)=>{
        const newTodoList = [...todoList]
        newTodoList[idx].status = newTodoList[idx].status === 'new'?'completed':'new'
        setTodoList(newTodoList)
    }
    const handleFilterAll = ()=>{
        const queryParams = {status:'all'}
        history.push({
            pathname:match.path,
            search:queryString.stringify(queryParams)
        })
    }
    const handleFilterCompleted = ()=>{
        const queryParams = {status:'completed'}
        history.push({
            pathname:match.path,
            search:queryString.stringify(queryParams)
        })
    }
    const handleFilterNew = ()=>{
        const queryParams = {status:'new'}
        history.push({
            pathname:match.path,
            search:queryString.stringify(queryParams)
        })
    }

    const renderTodoList = todoList.filter(todo => filterdStatus==='all'|| filterdStatus===todo.status)
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
    }
    const handleInputChange = (e)=>{
        setNewTodo(e.target.value)
    }
    const handleDelete = (id)=>{
        const newTodoList = [...todoList]
        setTodoList(newTodoList.filter(item=> item.id !==id))
    }
    return (
        <div className='todoApp'>
            <h2>Todo List:</h2>
            <div className='add-todo'>
            <input onChange={handleInputChange}/>
            <button onClick={handleAddTodo}>Add</button>
            </div>
            <>
                {renderTodoList.map((item,idx)=>(
                    <TodoItem key={item.id} idx={idx} todo={item} handleToggle={handleToggle} handleDelete={handleDelete}/>
                ))}
            </>
            <button onClick={handleFilterAll}>All</button>
            <button onClick={handleFilterCompleted}>Completed</button>
            <button onClick={handleFilterNew}>New</button>
        </div>
    );
}

export default TodoFeature;