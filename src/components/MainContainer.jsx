import React,  {useState, useEffect} from "react";
import Form from './Form';
import TodoList from './TodoList';
import { Routes, Route} from "react-router-dom";
import Home from "./Home";
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
 

      function handleDeleteClick(todo) {
        fetch(`http://localhost:9292/todos/${todo.id}`, {
           method: "DELETE",
        })
        const updatedTodos = todos.filter((task)=> task !== todo);
        setTodos(updatedTodos);
      }
    const filteredTodos = todos.filter((todo)=>{
        if(filterBy !== "All"){
          return todo.category === filterBy
        } else {
          return todos
        }
      });
     
  return (
    <div>
        <h1>Mission Possible</h1>
        <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/todos"
      element={<TodoList 
      todos={filteredTodos}
      setFilterBy={setFilterBy}
      filter={filterBy}
      handleDeleteClick={handleDeleteClick}/>} />
      <Route path="/todos/new" 
        element={<Form 
        onAddTodo={handleAddNewTodo}/>} />
    </Routes>
    </div>
  );
}

export default MainContainer;