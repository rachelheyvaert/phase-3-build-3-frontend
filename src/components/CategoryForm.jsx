import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';

const CategoryForm = ({addCategories}) => {
  const [newCategory, setNewCategory] = useState('');

  function handleChange(e) {
    const key = e.target.id
      setNewCategory({
      [key]: e.target.value,
     },console.log(newCategory))
  }
  const handleSubmit = async (e)=> {
    e.preventDefault()
  addCategories(newCategory)
}
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-name"
        label="Name"
        value={newCategory}
        onChange={handleChange}
      />
      <Button  onClick={handleSubmit} style={{backgroundColor:"black"}} type="submit" variant="contained">Add Category</Button>

 </Box>
  );
}


export default CategoryForm;