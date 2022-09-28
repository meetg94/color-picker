import { useState } from 'react'
import Button from '@mui/material/Button';

function App() {

  const colors = [
    {
      value: 1,
      label: 'white'
    },
    {
      value: 2,
      label: '#00ff7f'//green
    },
    {
      value: 3,
      label: '#61DBFB'
    },
    {
      value: 4,
      label: '#db4b4b'//red
    },
    {
      value: 5,
      label: '#FF8C00'//yelow
    }
  ]

  const [bgcolor, setBgColor] = useState(colors[0].label)

  const handleClick = () => {
    setBgColor(colors[1].label)
  }

  const handleBlue = () => {
    setBgColor(colors[2].label)
  }
  
  const handleRed = () => {
    setBgColor(colors[3].label)
  }

  const handleYellow = () => {
    setBgColor(colors[4].label)
  }

  return (
    <div style={{ backgroundColor: bgcolor, width: '100vw', height: '100vh'}}>
      <h2>Color Toggle App</h2>
      <p>Click on a button to toggle between Background colors</p>
      <div className='button-group'>
        <Button style={{backgroundColor: 'green'}} variant="contained" onClick={handleClick}>Green</Button>
        <Button style={{backgroundColor: 'blue'}} variant="contained" onClick={handleBlue}>Blue</Button>
        <Button style={{backgroundColor: 'red'}} variant="contained" onClick={handleRed}>Red</Button>
        <Button style={{backgroundColor: 'orange'}} variant="contained" onClick={handleYellow}>Orange</Button>
      </div>
      
    </div>
  );
}

export default App;
