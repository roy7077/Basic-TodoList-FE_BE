import React, { useState } from 'react'
import '../style/todohome.css'
import TodoCard from './TodoCard';

const TodoHome = () => {
    const[Searchtext,setSearchtext]=useState("");
    const[toggle,setToggle]=useState(true);

    const handleSubmit=(e)=>{
    
         let databody = {
             "title": "default",
             "description":Searchtext,
         }
     
         fetch('http://localhost:8080/api/v1/createTodo', {
                 method: 'POST',
                 body: JSON.stringify(databody),
                 headers: {
                     'Content-Type': 'application/json'
                 },
             })
             .then(res => res.json())
             .then(data => console.log(data));

        setToggle(!toggle);
     }
  return (
    <div className='todo-container'>
      <h1 className='todo-heading'> Todo List </h1>
      <div className='todo-input'>
        <input
            className='todo-input-field'
            type='text'
            placeholder='Write...'
            value={Searchtext}
            onChange={(e) => {
                setSearchtext(e.target.value);
            }}
            onKeyDown={(e) => {
                if (e.keyCode == 13) {
                    handleSubmit();
                }
            }}
        >
        </input>

        <button className='todo-submit-btn'
        onClick={()=>{
            handleSubmit();
        }}
        >Submit</button>
      </div>
      <TodoCard key={toggle}/>
    </div>
  )
}

export default TodoHome
