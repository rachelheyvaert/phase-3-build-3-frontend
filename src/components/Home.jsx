import React from 'react'
import { Typography } from '@mui/material'
import CategoryForm from './CategoryForm'

const Home = ({addCategories, categories}) => {
  return (
    <div>  <Typography gutterBottom variant="h5" style={{color: "#7FFF00"}}>       
    Mission Possible
    </Typography>
    <CategoryForm addCategories={addCategories} categories={categories}/>
    </div>
  )
}

export default Home;