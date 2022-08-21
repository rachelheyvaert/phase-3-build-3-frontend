
import { Button, makeStyles } from '@material-ui/core';
import NavBar from './components/navigation/NavBar';

const useStyles = makeStyles({
  button: {
    backgroundColor: 'violet'
  },
  default: {
    backgroundColor: 'blue'
  }
})
const App = () => {
  const classes = useStyles();
  return (
    <div>
      <h1 >Mission Possible</h1>
      <Button className={ classes.button } variant="contained">Accept</Button>
    </div>
  );
}

export default App;
