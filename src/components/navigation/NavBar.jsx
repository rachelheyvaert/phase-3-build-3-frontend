import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home';

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{backgroundColor:"#023047"}} position="static">
      <Container >
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
Your Missions Should You Choose to Accept
          </Typography>
          <Button style={{color:"#ffb703"}} component={Link}  to="/"><HomeIcon></HomeIcon></Button>
          <Button color="inherit" component={Link}  to="/Todos">Missions</Button>
          <Button style={{color:"#8ecae6"}} component={Link} to="/activities/Completed">Plan</Button>
          <Button style={{color:"#fb8500"}} component={Link} to="/activities/new">Add</Button>
        </Container>
      </AppBar>
    </Box>
  );
}

export default NavBar;