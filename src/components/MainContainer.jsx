import React,  {useState, useEffect, } from "react";
import NewTodoForm from './NewTodoForm';
import CategoryForm from "./CategoryForm";
// import CategoryList from './CategoryList';
import TodoEditForm from "./DisplayedTodo";
import { useNavigate } from "react-router-dom";
import TodoList from './TodoList';
import { Routes, Route} from "react-router-dom";
import Home from "./Home";


export const MainContainer = () => {
  const [todos, setTodos] = useState([]);
  const [categories, setAllCategories] = useState([]);
  const [filterBy, setFilterBy] = useState([])
  let navigate = useNavigate();
  
  useEffect(()=> {
    fetch(`http://localhost:9292/todos`)
    .then((r)=>r.json())
    .then((allTodos)=>setTodos(allTodos))
    // console.log(todos, 'inside effect')
   },[]);
  
    useEffect(()=> {
      fetch(`http://localhost:9292/categories`)
      .then((r)=>r.json())
      .then((data)=>setAllCategories(data))
      // console.log(categories, 'inside 2nd effect')
      },[]);

      const addCategories = (newCategory) => {
        console.log(newCategory, "in post")
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
      navigate.push(`/todos/${updatedTodo.id}`);
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
//NEED TO FILTER BY CATEGORY TITLE NOT INTEGER
  // const filteredTodos = todos.filter((todo)=>{
  //   if(filterBy !== "All..."){
  //     return todo.category_id === filterBy
  //   } else {
  //     return todos
  //     }
  // });
     
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home
        addCategories={addCategories} 
        categories={categories}/>}
        />
        <Route path="/todos"
          element={<TodoList 
          todos={todos}
          setFilterBy={setFilterBy}
          filter={filterBy}
          categories={categories}
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
        {/* <Route path="/categories"
          element={<CategoryList  
          handleDeleteClick={handleDeleteClick}/>} /> */}
      </Routes>
    </div>
  );
        }    

export default MainContainer;