import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import EditForm from './EditForm';


const TodoCard = ({todo, handleDeleteClick, onUpdateTodo, categories}) => {
  const [editing, setEditing] = useState(false)
  const [click, setClick] = useState(true)
 
  function handleClick(){
    setClick(false);
    console.log(todo)
  }

  return (
    <Card id={todo.id} key={todo.name} sx={{ maxWidth: 345, background:"#000000",margin:"50px", border:"solid" }}>
     <Button onClick={()=> handleClick()}> {click ? <CheckIcon style={{color:"black"}}></CheckIcon>  : <CheckIcon style={{color:"green"}}></CheckIcon>} </Button>
      <CardContent>
        <Typography gutterBottom variant="h5" style={{color: "#7FFF00"}}>
         {todo.name}
        </Typography>
        <Typography variant="body2" style={{color: "#40E0D0"}}>
         Details: {todo.details}
        </Typography>
        <Typography variant="body1" style={{color: "white"}}>
        Category: {todo.category.title}
        </Typography>
      </CardContent>
      <CardActions >
        <Button onClick={() => setEditing(!editing)}>Edit</Button>
       {editing ? <EditForm onUpdateTodo={onUpdateTodo} categories={categories} todo={todo} />  : null}
        <Button onClick={() => handleDeleteClick(todo)} size="small" style={{color:"red"}}>
          <DeleteIcon></DeleteIcon>
        </Button>
      </CardActions>
    </Card>
  );
}

export default TodoCard