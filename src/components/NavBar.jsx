import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:"#000000"}} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            style={{color:"#7FFF00"}}
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography  style={{color:"#7FFF00"}} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Assignments
          </Typography>
          <Button style={{color:"#7FFF00"}}>Home</Button>
          <Button style={{color:"#7FFF00"}}>Add</Button>
          <Button style={{color:"#7FFF00"}}>Completed</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default NavBar;