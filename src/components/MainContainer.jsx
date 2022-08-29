import React,  {useState, useEffect} from "react";
import NewTodoForm from './NewTodoForm';
import CategoryForm from "./CategoryForm";
import CategoryList from './CategoryList';
import TodoEditForm from "./TodoEditForm";
import { useNavigate } from "react-router-dom";
import TodoList from './TodoList';
import { Routes, Route} from "react-router-dom";
import Home from "./Home";
const baseUrl = `http://localhost:9292/todos`

export const MainContainer = () => {
  const [todos, setTodos] = useState([]);
  const [categories, setAllCategories] = useState([]);
  const [filterBy, setFilterBy] = useState("All")
  const history = useNavigate();
  
  useEffect(()=> {
    fetch(baseUrl)
    .then((r)=>r.json())
    .then((data)=>setTodos(data))
    },[])
  
    useEffect(()=> {
      fetch(`http://localhost:9292/categories`)
      .then((r)=>r.json())
      .then((data)=>setAllCategories(data))
      },[])

  const addCategories = (newCategory) => {
      fetch(`http://localhost:9292/categories`, {
        method: "POST",
        headers: {
         "Content-Type": "application/json",
          Accept: 'application/json'
        },
          body: JSON.stringify(newCategory)
      })
      .then((r) => r.json())
      .then((newCat) => {
        setTodos(categories.concat(newCat))
        history.push(`/categories/${newCat.id}`)
      });
    }

  const addTodo = (formData) => {
    console.log(formData, "in add todo")
    fetch(`http://localhost:9292/todos`, {
      method: "POST",
      headers: {
       "Content-Type": "application/json",
        Accept: 'application/json'
      },
        body: JSON.stringify(formData)
    })
    .then((r) => r.json())
    .then((newTodo) => {
      setTodos(todos.concat(newTodo))
      history.push(`/todos/${newTodo.id}`)
    });
  }

  const updateTodo = (id, formData) => {
    fetch(`http://localhost:9292/todos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
        body: JSON.stringify(formData)
    })
    .then(res => res.json()) 
    .then(updatedTodo => {
    // pessimistically update the todo in state after we get a response from the api
    setTodos(todos.map((todo) => (todo.id === parseInt(id) ? updatedTodo : todo)));
      history.push(`/todos/${updatedTodo.id}`);
    })
  }
          // const updateTodo = todos.map((todo)=> {
          //   const updatedTodo = todos.find((todo) => todo.id === parseInt(dogId));
          //   if (todo === )
          // })
    // function handleAddNewTodo(newTodo){
    //   const updatedTodoList = [...todos, newTodo];
    //   setTodos(updatedTodoList);
    // }
 

  function handleDeleteClick(todo) {
    fetch(`http://localhost:9292/todos/${todo.id}`, {
      method: "DELETE",
    })
      const updatedTodos = todos.filter((task)=> task !== todo);
      setTodos(updatedTodos);
  }

  const filteredTodos = todos.filter((todo)=>{
    if(filterBy !== "All"){
      return todo.category_id === filterBy
    } else {
      return todos
      }
  });
     
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/todos"
          element={<TodoList 
          todos={filteredTodos}
          setFilterBy={setFilterBy}
          filter={filterBy}
          handleDeleteClick={handleDeleteClick}/>} />
        <Route path="/new_todo" 
          element={<NewTodoForm 
          onAddTodo={addTodo}
          categories={categories}
          todos={todos}/>} />
        <Route 
          path="/todos/:id/edit"
          render={({ match }) => (
          <TodoEditForm
          todo={todos.find((todo) => todo.id === parseInt(match.params.id))}
          updateTodo={updateTodo}/>)} />
        <Route path="/categories"
          element={<CategoryList  
          handleDeleteClick={handleDeleteClick}/>} />
      </Routes>
    </div>
  );
}

export default MainContainer;