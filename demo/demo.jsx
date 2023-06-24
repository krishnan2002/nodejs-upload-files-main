import React, { Component } from "react";
import {useState} from "react"
import "./App.css";

function App(){
  let nextId=3
  const array=[
    {id:0, title:"krishnan", checked:true},
    {id:1, title:"Subasri", checked:true},
    {id:2, title:"kavisri", checked:true}
  ]
  const [name,setName] = useState('')
  const [todos, setTodos] = useState(array)
  function handleAddTodo(name){
    setTodos([...todos,{id:nextId++,title:name,checked:false}])
  }
  return(
    <>
      {todos.map((i) =><lable>{i.title}
      <input type='checkbox' 
      value={i.title} 
      /> 
      </lable>
      )}
  <input type="text" value={name} 
    onChange={e => setName(e.target.value)}/>
  <button onClick={() => {
        setName('');
        handleAddTodo(name);
  }}>Add</button>
      </>
  )
}

export default App;