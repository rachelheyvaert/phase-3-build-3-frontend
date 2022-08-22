import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

const TodoCard = ({todo, handleDeleteClick}) => {
  return (
    <Card id={todo.id} key={todo.name} sx={{ maxWidth: 345, background:"#023047",margin:"50px", border:"solid" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" style={{color: "white"}}>
         {todo.name}
        </Typography>
        <Typography variant="body1" style={{color: "#ffb703"}}>
        Category: {todo.category}
        </Typography>
        <Typography variant="body2" style={{color: "#219ebc"}}>
          {todo.description}
        </Typography>
      </CardContent>
      <CardActions >
        <Button onClick={() => handleDeleteClick(todo)} size="small" style={{color:"#ff5003"}}>
          <DeleteIcon></DeleteIcon>
        </Button>
      </CardActions>
    </Card>
  );
}

export default TodoCard