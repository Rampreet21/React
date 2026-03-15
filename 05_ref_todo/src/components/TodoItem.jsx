import { useState } from 'react'

const TodoItem = ({todos, onDelete, onEdit}) => {
    const [done, setDone] = useState(false);
    const [edit, setEdit] = useState(false);
    const [newdata, setNewData] = useState(todos.title);



  return (
    <div className='container d-flex justify-content-between align-items-center my-2'>
            <div style={{background: done ? "#2d825a": "#F8F9FA"}} className='todoL p-2 rounded shadow-sm'>

                {edit ?
                <input type="text" className='form-control' value={newdata} onChange={(e) => setNewData(e.target.value)} /> 
                 :<span style={{color: done? 'white': 'black'}}>{todos.title}</span>}
            </div>
            
                    {!edit ? 
                <div className='btns d-flex justify-content-end align-items-center'>
                    {!done 
                    ?<><button className='btn btn-success mx-2 btn-sm shadow-sm' onClick={() => setDone(true)}>Done</button>
                <button onClick={()=>{setEdit(true)}} className='btn btn-primary mx-2 btn-sm shadow-sm'>Edit</button> </>
                 :<button onClick={() => {onDelete(todos.id); setDone(false)}} className='btn mx-2 btn-danger btn-sm shadow-sm'>Delete</button>}
            </div>
                    :<div className='btns d-flex justify-content-end align-items-center'>
                <button onClick={()=>{onEdit(todos.id, newdata); setEdit(false)}} className='btn btn-primary mx-2 btn-sm shadow-sm'>Save</button></div>
            }
        </div>
  )
}

export default TodoItem
