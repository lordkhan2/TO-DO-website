import Typography from "@material-ui/core/Typography";
import React, {useEffect, useState} from 'react';
import "./App.css";
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const Local_Storage_Key = 'react-todo-list-todos';

const App = () => {
    const [todos, setTodos] = useState([]);

    //to populate todos when app initially renders
     useEffect(() => {
        const storageTodos= JSON.parse(localStorage.getItem(Local_Storage_Key));
        
        if (storageTodos){
            setTodos(storageTodos);
        }
    },[])

    //store data in local storage
    useEffect(() =>{
        localStorage.setItem(Local_Storage_Key, JSON.stringify(todos));
    },[todos]);

    
    const addTodo = (todo) =>{
        setTodos([todo, ...todos]);
    }
    
    const toggleComplete = (id) =>{
        setTodos(
            
            todos.map((todo) =>{
                if(todo.id === id){
                    return{
                        ...todo, completed: !todo.completed
                    }
                }
                return todo;
            })
        )

    }

    const removeTodo = (id) => {
        
        setTodos(todos.filter((todo) => todo.id !== id));
    }
    

    return (
        <div className= 'App'>
            <Typography style= {{padding: 16}} variant="h1">TO-DO</Typography> 
            <TodoForm addTodo={addTodo}/>
            <TodoList todos= {todos} toggleComplete={toggleComplete} removeTodo ={removeTodo}/>
        </div>
    )
}

export default App;
