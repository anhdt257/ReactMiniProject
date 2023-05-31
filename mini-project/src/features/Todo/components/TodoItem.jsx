import React from 'react';
import './style.scss'
function TodoItem(props) {
    const {todo,idx,handleToggle,handleDelete} = props
    const onToggle = (todo,idx)=>{
        handleToggle(todo,idx)
    }
    const onDelete = (id)=>{
        handleDelete(id)
    }
    return (
        <div className='todoItem'>
            <p className={`${todo.status==="completed" ? 'disable' :""}`} onClick={()=>onToggle(todo,idx)}>
               {todo.name} 
            </p>
               <button>Update</button>
               <button onClick={()=>onDelete(todo.id)}>Delete</button> 
        </div>
    );
}

export default TodoItem;