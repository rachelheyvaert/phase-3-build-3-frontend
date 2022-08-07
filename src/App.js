
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  button: {
    backgroundColor: 'violet'
  }
})
const App = () => {
  const classes = useStyles();
  return (
    <div className="App">
      <h1>Hello Rachel</h1>
      <Button className={ classes.button } variant="contained">click</Button>
    </div>
  );
}

export default App;
