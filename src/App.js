import './App.css';
import React,{useState} from 'react'

function App() {
    const [red,setRed]=useState(false)
    const popo = () => {
        setRed(!red)
    }
  return (
    <div className="App">
        <button onClick={popo} className="button" style={{backgroundColor: red? "red":"blue"}}></button>
        <button onClick={popo} className="button1" style={{backgroundColor: red? "blue":"red"}}></button>
    </div>
  );
}

export default App;
