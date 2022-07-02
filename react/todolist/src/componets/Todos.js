import React,{useState} from 'react'
import Todoitem from './Todoitem'
// import React,{useState} from 'react'


export default function Todos(prop) {

  const [todos,setTodos]=useState(prop.todo)
  const onDelete=(todo)=>{
    console.log("Delete is clicked",todo);
    setTodos(todos.filter((e)=>{
      return e!==prop.todo
    }))
    // let index=prop.todo.indexOf(todo);
    // prop.todo.splice(index,1);
  }
  
  return (
    <div className='container'>
      <h3 className='text-center'>Todos List</h3>

      {/* below wale ko hume for loops se render karwana hai */}
    {prop.todo.map((i)=>{
      return <Todoitem todo={i} key={i.sno} onDelete={onDelete}/>
    })}
     
    </div>
  )
}
