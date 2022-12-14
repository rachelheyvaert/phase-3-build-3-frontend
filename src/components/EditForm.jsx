import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { FormControl, Input, InputLabel } from '@mui/material';
import React, { useEffect } from 'react'
import {useState} from 'react'

const EditForm = ({onUpdateTodo, categories, todo}) => {
    const [formValue, setFormValue] = useState({ 
        name: "",
        details: "",
        categoryTitle: "",
        category_id: ""
    })

    useEffect(()=>{
        setFormValue({
            name: todo.name,
            details: todo.details,
            category_id: todo.category_id,
        }) 
    },[])


    const categoryOptions = categories.map((cat)=>{
        return <option key={cat.id}  value={cat.id}>{cat.title}</option>
    })

    function handleChange(e){
        //not updating the select
        const key = e.target.id
        // console.log(formValue.categoryTitle);
        setFormValue({
            ...formValue,
            [key]: e.target.value
            
        })
    }

    const handleSubmit = async (e)=> {
        e.preventDefault()
        console.log(formValue, 'data in submit')
      updateTodo(formValue)
}


    function updateTodo(formValue){
        fetch(`http://localhost:9292/todos/${todo.id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              'Accepts': "application/json",
            },
              body: JSON.stringify(formValue)
          })
          .then(res => res.json())        
          .then((updatedTodo => onUpdateTodo(updatedTodo)))
    }

  return (
    <div style={{color:"white"}}>
      <Box id={todo.id} sx={{width: 300, height: 300,  backgroundColor: 'secondary.main','&:hover': { backgroundColor: 'success.main', opacity: [0.9, 0.8, 0.7],},}}>
        <Box component="span" sx={{ p: 2, border: '1px grey', color: 'text.primary', bgcolor: 'text.disabled' }}>
            <Button sx={{ color: 'white'}} onClick={handleSubmit}>Save</Button>
        </Box>   
      <FormControl sx={{margin: 3}}>
        <InputLabel sx={{color: 'black'}}htmlFor="my-input">Edit Name</InputLabel>
        <Input id="name" aria-describedby="my-helper-text"
             onChange={handleChange}
             value={formValue.name} />
        </FormControl>
        <FormControl sx={{margin: 3}}>
        <InputLabel sx={{color: 'black'}}htmlFor="my-input">Edit Details</InputLabel>
        <Input id="details" aria-describedby="my-helper-text"
         onChange={handleChange}
         value={formValue.details} />
    </FormControl>
    <FormControl sx={{margin: 3}}>
        <select
        id="category_id"
        onChange={handleChange}
        value={formValue.category_id}
         color="warning">
      {categoryOptions}     
        </select>
    </FormControl>

   </Box>
    </div>
  
  )}

export default EditForm