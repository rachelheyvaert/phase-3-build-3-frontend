import React from 'react'
import {useState} from "react"
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const Form = ({onAddTodo}) => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
       category: "",
        isFinished: false,
      })
       const emptyForm = {
        name: "",
        description: "",
       category: "",
        isFinished: false
        }
        function handleSubmit(e){
            e.preventDefault()
           
            fetch(`http://localhost:9292/todos`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(
             formData
              ),
            })
              .then((r) => r.json())
              .then((newTodo) => onAddTodo(newTodo));
             setFormData(emptyForm);
          }

          function handleChange(e) {
            const key = e.target.id
             setFormData({
               ...formData,
           [key]: e.target.value,
             })
           }

  return (
    <div><Typography sx={{ flexGrow: 5 }}  mt="20px" variant="h3" align="center" style={{color:"#023047"}}>
    Create a Mission</Typography>
<Box  sx={{ '& > :not(style)': { m: 8} }} style={{backgroundColor:"#219ebc", textAlign: "center", marginLeft:"10%", marginRight: "10%", marginTop:"3%"}}>
<FormControl  variant="standard" onSubmit={handleSubmit} >
<InputLabel style={{color:"#ffb703"}}> Title of Activity..</InputLabel>
  <Input 
    id="name"
    value={formData.name}
    onChange={handleChange}
    color="warning"
  />
  </FormControl>
  <FormControl>
  <InputLabel style={{color:"#ffb703"}}>Frequency</InputLabel>
  <Input
    id="area"
    value={formData.category}
    onChange={handleChange}
    color="warning"
  />
  <FormHelperText style={{color:"white"}}>
   Description
  </FormHelperText>
  </FormControl>
  <FormControl >
  <InputLabel style={{color:"#ffb703"}} htmlFor="component-helper">Description</InputLabel>
  <Input
    id="description"
    value={formData.description}
    onChange={handleChange}
    color="warning"
  />
  </FormControl>
<Button  onClick={handleSubmit} style={{backgroundColor:"#fb8500"}} type="submit" variant="contained">Add Activity</Button>
</Box>
</div>
);
  }
export default Form;