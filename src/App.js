import { useState } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';

function CheckboxExample() {
  const [checked, setChecked] = useState(false);

  return <Checkbox checked={checked}></Checkbox>;
}

function App() {
  return (
    <div className="App">
      <h2>Hello??</h2>
      <CheckboxExample></CheckboxExample>
      <ButtonGroup variant="contained" color="primary">
        <Button startIcon={<SaveIcon />} size="large" href="#">
          Save
        </Button>
        <Button
          startIcon={<DeleteIcon />}
          size="large"
          href="#"
          variant="contained"
        >
          Discard
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default App;
