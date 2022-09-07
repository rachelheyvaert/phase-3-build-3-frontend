import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';

const CategoryForm = ({addCategories, categories}) => {
  const [newCategory, setNewCategory] = useState('');

  function handleChange(e) {
      setNewCategory(e.target.value)
  }
  const handleSubmit = async (e)=> {
    e.preventDefault()
    console.log(newCategory, "in category submit")
    addCategories(newCategory)
}
  return (
    <Box
      component="form"
      sx={{'& > :not(style)': { m: 1, width: '25ch' },}}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-name"
        label="Name"
        value={newCategory}
        onChange={handleChange}
      />
      <Button onClick={handleSubmit}
         style={{backgroundColor:"black"}} 
         type="submit" variant="contained"> Add a Category</Button>
    </Box>
  );
}


export default CategoryForm;