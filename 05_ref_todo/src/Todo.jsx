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
    const [todoList, setTodoList] = useState( JSON.parse(localStorage.getItem("todoList")) !== null && JSON.parse(localStorage.getItem("todoList")).length > 0 ? JSON.parse(localStorage.getItem("todoList")) : todoListf);
    

    
    function Add(){
        let id = todoList.length == 0 ? 0 : todoList[todoList.length - 1].id;
        let data = {
            id: id + 1,
            title:add
        }
        setTodoList([...todoList, data]); 
    }

    function Delete(id){
        let obj =[]
        console.log(id);
        for(let i = 0; i < todoList.length; i++){
            if(todoList[i].id !== id){
                obj.push(todoList[i]);
            }
        }
        setTodoList(obj);
    }
    
    function Edit(id,data){
        let obj = [];
        console.log(id);
        for(let i = 0; i < todoList.length; i++){
            if(todoList[i].id == id){
                // eslint-disable-next-line react-hooks/immutability
                todoList[i].title = data;
                obj.push(todoList[i]);
            }else{
                obj.push(todoList[i]);
            }
        }
        setTodoList(obj);
    }
    localStorage.setItem("todoList", JSON.stringify(todoList));

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
                return <TodoItem key={todos.id} todos={todos} onDelete={Delete} onEdit={Edit} />
            })
        }
        
        </div>
    )
}

export default Todo