import React from 'react'
import TodoCard from './TodoCard'
import Filter from './Filter';
import { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

export const TodoList = ({filterBy, setFilteredTodos, setTodos, setFilterBy, handleDeleteClick, todos, categories, onUpdateTodo, handleFilterChange}) => {
  useEffect(()=> {
    fetch(`http://localhost:9292/todos`)
    .then((r)=>r.json())
    .then((allTodos)=> {
      setFilteredTodos(allTodos)
      setTodos(allTodos)})
   },[]);

  const todoObj = todos.map((todo)=>{
    return <TodoCard handleDeleteClick={handleDeleteClick} key={todo.id} todo={todo} onUpdateTodo={onUpdateTodo} categories={categories}
  />})
    return (
    <div> <Typography sx={{ flexGrow: 5 }} font="Monaco" mt="20px"variant="h3" align="center" style={{color:"#00000"}} >
    Active Missions</Typography>
<Filter filterBy={filterBy} setFilterBy={setFilterBy} categories={categories} handleFilterChange={handleFilterChange}/>   
<Grid container spacing={2} ml="40px">
 {todoObj}
 </Grid>
 </div>
  )
}

export default TodoList;