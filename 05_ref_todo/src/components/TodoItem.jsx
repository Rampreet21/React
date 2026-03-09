import { useState } from 'react'

const TodoItem = ({todos, onDelete}) => {
    const [done, setDone] = useState(false);



  return (
    <div className='container d-flex justify-content-between align-items-center my-2'>
            <div style={{background: done ? "#198754": "#F8F9FA"}} className='todoL p-2 rounded shadow-sm'>
                <span style={{color: done? 'white': 'black'}}>{todos.title}</span>
            </div>
            <div className='btns d-flex justify-content-end align-items-center'>
                <button className='btn btn-success mx-2 btn-sm shadow-sm' onClick={() => setDone(!done)}>Done</button>
                <button className='btn btn-primary mx-2 btn-sm shadow-sm'>Edit</button>
                <button onClick={onDelete} className='btn btn-danger btn-sm shadow-sm'>Delete</button>
            </div>
        </div>
  )
}

export default TodoItem
