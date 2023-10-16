
import './App.css'; //here we are importing css.. so for applying css do changes in App.css & we can change name of css file
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
import React, {useState} from 'react';

function App() {
  const[mode, setMode] = useState('light');  //whether dark mode is enabled or not
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
    {/* //here we pass a prop */}
    {/* <Navbar title="TextUtils" aboutText="About TextUtils"/>  */}
    {/* <Navbar/> */}
    

    {/* //Here we are using about from defaultProps... */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/> 

    <Alert alert={alert}/>

    {/*//we write <TextForm/> inside  class container becz in bootstrap by using this we can get textbox at centre of page  & my3 means margin apply karta thodisi*/}
    <div className="container my3">
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
      {/* <About/> */}
    </div>
    </>

  );
}

export default App;
