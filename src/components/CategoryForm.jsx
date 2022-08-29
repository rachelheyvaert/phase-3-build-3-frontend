import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const CategoryForm = () => {
  const [newCategory, setNewCategory] = React.useState('Add a category');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewCategory(event.target.value);
  };
  const handleSubmit = async (e)=> {
    e.preventDefault()
  //function to add POST with new category
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