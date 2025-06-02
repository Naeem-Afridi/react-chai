import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(5);

  const incValue = ()=> {
    if(counter < 20){
    setCounter(counter + 1);
    }
    else{
      alert("We cannot incrase the value more than 20");
    }
  }

  const decValue = ()=> {
    if(counter > 0){
    setCounter(counter - 1);
    }
    else{
      alert("We cannot decrease the less more than 0");
    }
  }

  return (
    <>
      <h2>React Counter</h2>
      <p>Current Value = {counter}</p>
      <button onClick={incValue}>Increase Value</button>
      <br />
      <button onClick={decValue}>Decrease Value</button>
    </>
  )
}

export default App
