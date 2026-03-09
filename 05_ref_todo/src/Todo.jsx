import React from 'react'
import { useState } from 'react'
import TodoItem from './components/TodoItem'

const Todo = () => {
    
    let todoListf = [
        {
            id: 1,
            title: 'Todo Item 1'
        },
        {
            id: 2,
            title: 'Todo Item 2'
        },
        {
            id: 3,
            title: 'Todo Item 3'
        }
    ]
    
    const [add, setAdd] = useState("");
    const [todoList, setTodoList] = useState(todoListf);


    
    function Add(){
        let data = {
            id: todoList.length + 1,
            title:add
        }
        setTodoList([...todoList, data]);
        
    }

    function Delete(id){
        let newList = todoList.splice(id, 1);
        setTodoList(newList);
    }
    console.log(todoList);



    return (
        <div className='container conn'>
        <h2 className='text-center mt-5 mb-4 '>Todo List</h2>
        <div className='container  d-flex justify-content-between align-items-center mb-4'>
            <input value={add} onChange={(e)=>setAdd(e.target.value)} type="text" className='form-control' placeholder='Add a new todo...' required />
            <button type='button' onClick={Add} className="btn btn-info shadow-sm mx-4">Add</button>
        </div>

        {
            todoList.map((todos)=>{
                return <TodoItem key={todos.id} todos={todos} onDelete={Delete} />
            })
        }
        
        </div>
    )
}

export default Todo