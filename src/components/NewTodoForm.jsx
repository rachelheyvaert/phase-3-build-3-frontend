import React from 'react'
import {useState} from "react"
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const NewTodoForm = ({onAddTodo, categories}) => {
    const [formData, setFormData] = useState({
        name: "",
        details: "",
       category_id: ""
      })
    const categoryOptions = categories.map((cat)=>{
        return <option key={cat.id} value={cat.id}>{cat.title}</option>
    })
    const handleSubmit = async (e)=> {
            e.preventDefault()
            console.log(formData, 'data in submit')
          onAddTodo(formData)
    }

    function handleChange(e) {
      const key = e.target.id
        setFormData({
         ...formData,
        [key]: e.target.value,
       })
    }

  return (
    <div><Typography sx={{ flexGrow: 5 }}  mt="20px" variant="h3" align="center" style={{color:"#7FFF00"}}>
    Create a Mission</Typography>
<Box  sx={{ '& > :not(style)': { m: 8} }} style={{backgroundColor:"grey", textAlign: "center", marginLeft:"10%", marginRight: "10%", marginTop:"3%"}}>
<FormControl  variant="standard" onSubmit={handleSubmit} >
<InputLabel style={{color:"#7FFF00"}}> Title of Mission...</InputLabel>
  <Input 
    id="name"
    value={formData.name}
    onChange={handleChange}
    color="warning"
  />
  </FormControl>
  <FormControl>
  <InputLabel style={{color:"#7FFF00"}}></InputLabel>
  <select
    id="category_id"
    value={formData.category}
    onChange={handleChange}
    color="warning">
      {categoryOptions}
    </select>

  <FormHelperText style={{color:"white"}}>
  </FormHelperText>
  </FormControl>
  <FormControl >
  <InputLabel style={{color:"#7FFF00"}} htmlFor="component-helper">Details</InputLabel>
  <Input
    id="details"
    value={formData.details}
    onChange={handleChange}
    color="warning"
  />
  </FormControl>
<Button  onClick={handleSubmit} style={{backgroundColor:"red"}} type="submit" variant="contained">Add Activity</Button>
</Box>
</div>
);
  }
export default NewTodoForm;