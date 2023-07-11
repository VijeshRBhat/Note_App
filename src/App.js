import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About'
import NoteState from './context/NoteState';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';
import  Alert  from './components/Alert';



function App() {
  const [alert,setAlert] = useState(null);
  const [dmail, setdmail] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}

  return (
    <div className='App'>
    <NoteState>
    <Router>
      <Navbar dmail={dmail}/>
      <div style = {{backgroundColor : '#FFFDD0'}}>
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home showAlert = {showAlert}/>} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login showAlert = {showAlert} dmail={dmail} setdmail={setdmail}/>} />
          <Route exact path="/signup" element={<Signup showAlert = {showAlert} dmail={dmail} setdmail={setdmail}/>} />
        </Routes>
        </div>
        </div>
      </Router>
      </NoteState>
    </div>
  );
}

export default App;
