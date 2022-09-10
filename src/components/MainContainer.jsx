import React,  {useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TodoList from './TodoList';
import { Routes, Route} from "react-router-dom";
import Home from "./Home";


export const MainContainer = () => {
  const [todos, setTodos] = useState([]);
  const [categories, setAllCategories] = useState([]);
  const [filterBy, setFilterBy] = useState("All...");
  const [filteredTodos, setFilteredTodos] = useState([]);
  let navigate = useNavigate();
  
  useEffect(()=> {
    fetch(`http://localhost:9292/todos`)
    .then((r)=>r.json())
    .then((allTodos)=> {
      setFilteredTodos(allTodos)
      setTodos(allTodos)})
   },[]);
  
   useEffect(()=> {
     fetch(`http://localhost:9292/categories`)
     .then((r)=>r.json())
     .then((data)=>setAllCategories(data))
      },[]);

    const addCategories = (newCategory) => {
        fetch(`http://localhost:9292/categories`, {
        method: "POST",
        headers: {
         "Content-Type": "application/json",
        },
          body: JSON.stringify({
            title: newCategory})
      })
      .then((r) => r.json())
      .then((newCat) => setAllCategories(categories.concat(newCat))
      )
    }

  const addTodo = (formData) => {
    fetch(`http://localhost:9292/todos`, {
      method: "POST",
      headers: {
       "Content-Type": "application/json",
      },
        body: JSON.stringify(formData)
    })
    .then((r) => r.json())
    .then((newTodo) => setTodos(todos.concat(newTodo)))
    };

    function handleDeleteClick(todo) {
      fetch(`http://localhost:9292/todos/${todo.id}`, {
        method: "DELETE",
      })
        const refreshTodos = todos.filter((task)=> task !== todo);
        setTodos(refreshTodos)
        setFilteredTodos(refreshTodos);
    }
  
  function onUpdateTodo(id) {
    fetch(`http://localhost:9292/todos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
        body: JSON.stringify({
          completed: true,

        })
    })
    .then(res => res.json()) 
    .then(updatedTodo => {
    })
  }

  function handleFilterChange(e){
   setFilterBy(e.target.value)
    if(e.target.value === "All..." ){ 
      setFilteredTodos(todos) 
    } else {
      setFilteredTodos(todos.filter(todo=> todo.category.title === e.target.value))
    }
  }

     
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home
        addCategories={addCategories} 
        categories={categories}
        onAddTodo={addTodo}
        todos={filteredTodos}/>}
        />
        <Route path="/todos"
          element={<TodoList 
          handleFilterChange={handleFilterChange}
          todos={filteredTodos}
          onUpdateTodo={onUpdateTodo}
          setFilterBy={setFilterBy}
          filter={filterBy}
          categories={categories}
          handleDeleteClick={handleDeleteClick}/>} />
      </Routes>
    </div>
  );
        }    

export default MainContainer;