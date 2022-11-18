
import { useState } from 'react';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import Alert from './component/Alert';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {
  const [Mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
        setAlert(null);
    },2000)
  }
  const togglemode= ()=>{
    if(Mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
    }

  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={Mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
          <Route path="/about" element={<About Mode={Mode}/>}/>
          <Route path="/"  element={<Textform showAlert={showAlert} heading="Enter the text" Mode={Mode}/>}/>
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
