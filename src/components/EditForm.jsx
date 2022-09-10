import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { FormControl, Input, FormHelperText, InputLabel } from '@mui/material';
import React from 'react'
import {useState} from 'react'

const EditForm = ({onUpdatTodo, categories}) => {
    const [formValue, setFormValue] = useState({ 
        //want to grab specific todo data
        name: "",
    details: "",
   category: "",
  })
  const [newValues, setNewValues] = useState(formValue)
  function handleInputChange(e){
 setFormValue({
 })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdatTodo(newValues)
  }

  return (
    <div style={{color:"white"}}>
      <Box sx={{width: 300, height: 300,  backgroundColor: 'secondary.main','&:hover': { backgroundColor: 'success.main', opacity: [0.9, 0.8, 0.7],},}}>
      <Box component="span" sx={{ p: 2, border: '1px grey', color: 'text.primary', bgcolor: 'text.disabled' }}>
      <Button sx={{ color: 'white'}} onClick={handleSubmit}>Save</Button>
      </Box>   
      <FormControl sx={{margin: 3}}>
  <InputLabel sx={{color: 'black'}}htmlFor="my-input">Edit Name</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" />
</FormControl>
   
   </Box>
    </div>
  
  )}

export default EditForm