import React,  {useState, useEffect} from "react";
import Form from './Form';
import TodoList from './TodoList';
import { Routes, Route} from "react-router-dom";
const baseUrl = `http://localhost:9292/todos`

export const MainContainer = () => {
    const [todos, setTodos] = useState([]);
    const [filterBy, setFilterBy] = useState("All")
    
  
    useEffect(()=> {
      fetch(baseUrl)
      .then((r)=>r.json())
      .then((data)=>setTodos(data))
    },[])
  

    function handleAddNewTodo(newTodo){
      const updatedTodoList = [...todos, newTodo];
      setTodos(updatedTodoList);
    }
  

  return (
    <div>
        <h1>Mission Possible</h1>
        <Routes>
      <Route path="/"
      element= {<MainContainer />} 
      />
      <Route path="/todos"
      element={<TodoList />} 
      />
      <Route path="/todos/new" 
        element={<Form 
            onAddTodo={handleAddNewTodo}/>} 
      />
    </Routes>
    
    </div>
  )
}

export default MainContainer;