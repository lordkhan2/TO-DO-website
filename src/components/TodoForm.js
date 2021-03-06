import { Button, TextField } from "@material-ui/core";
import React, { useState } from 'react'
import {v4 as uuid} from "uuid";

function TodoForm({addTodo}) {
    
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    
    const handleTaskInputChange=(e) =>{
        //update task value, from todo 
        setTodo({ ...todo, task: e.target.value })
    };

    const handleSubmit=(e) =>{
        e.preventDefault();
      
        if(todo.task.trim()){
            addTodo({...todo, id: uuid()});

            //reset task input
            setTodo({...todo, task: ""})
        }
        
    }

    return (
        <form className="todo-form" onSubmit= {handleSubmit} >
            <TextField lable="Task" name= "task" type="text" value={todo.task} onChange={handleTaskInputChange}/>
            <Button type="submit">Submit</Button>
        </form>
    )
}

export default TodoForm
