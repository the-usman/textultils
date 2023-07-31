import { useState } from 'react';
import './App.css';
import Navbar from './compnents/Navbar';
import TextArea from './compnents/TextArea'
import Alert from './compnents/Alert'
import About from './compnents/About'
import Error from './compnents/Error'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);
  const containerStlying = {
    backgroundColor: 'black'
  }
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    }
    )
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      showAlert("Dark Mode Enabled", "success")
    }
    else {
      setMode('light')
      showAlert("Light Mode Enabled", "success")
    }
  }
  const textAreaStyling = {
    color: 'white',
    backgroundColor: 'rgb(26, 37, 54)'
  }
  if (mode === 'dark') {
    document.body.style.backgroundColor = '#222222'
    document.body.style.color = 'white'
  }
  else {
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
  }
  return (
    <>
    <BrowserRouter>
    <Navbar title="TextUtils" modeFunc={toggleMode} mode={mode} />
    
    <Alert alert={alert} />
    <Routes>
      

      {/*  */}
      <Route path='/' element={<TextArea handing="Enter Your Text to Analyze" mode={mode} textAreaStyling={textAreaStyling} showAlert={showAlert} />}/>
      <Route path='/about' element={<About mode={mode} containerStlying={containerStlying} /> }/>
      <Route path='*' element={<Error/>}/>
      
      
    </Routes>
    </BrowserRouter>



    </>
  );
}

export default App;
