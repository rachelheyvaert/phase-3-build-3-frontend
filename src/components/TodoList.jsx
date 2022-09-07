import React from 'react'
import TodoCard from './TodoCard'
import Filter from './Filter';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

export const TodoList = ({filterBy, setFilterBy, handleDeleteClick, todos, categories}) => {
  const todoObj = todos.map((todo)=>{
    console.log(todos)
    return <TodoCard handleDeleteClick={handleDeleteClick} key={todo.id} todo={todo}
  />})
    return (
    <div> <Typography sx={{ flexGrow: 5 }} font="Monaco" mt="20px"variant="h3" align="center" style={{color:"#00000"}} >
    Active Missions</Typography>
<Filter filterBy={filterBy} setFilterBy={setFilterBy} categories={categories}/>   
<Grid container spacing={2} ml="40px">
 {todoObj}

 </Grid>
 </div>
  )
}

export default TodoList;