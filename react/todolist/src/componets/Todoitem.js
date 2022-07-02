import React from 'react'

export default function Todoitem (prop) {
  let toitem={
    // add css in this 
    // top:"100vh"
    // and call this object as style={toitem}
  }
  return (
    <div style={toitem}>
      <h5>{ prop.todo.title}</h5>
      <p>{prop.todo.desc}</p>
      <button type="button" className="btn btn-danger" onClick={()=>{prop.onDelete(prop.todo)}}>Delete</button>
    </div>
  )
}
