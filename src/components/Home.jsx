import React from 'react'
import { Typography } from '@mui/material'
import CategoryForm from './CategoryForm'
import NewTodoForm from './NewTodoForm'

const Home = ({addCategories, categories, todos, onAddTodo}) => {
  return (
    <div>  <Typography  align="center" gutterBottom variant="h2" style={{color: "#7FFF00"}}>       
    Mission Possible
    </Typography>
    <CategoryForm addCategories={addCategories} categories={categories}/>
    <NewTodoForm 
          onAddTodo={onAddTodo}
          categories={categories}
          todos={todos} />
    </div>
  )
}

export default Home;