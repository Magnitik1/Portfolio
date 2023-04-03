import './App.css';
import Bar from './Bar/Bar';
import Home from './Home/Home';
import Projects from './Bar/Projects/Projects';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, {useState} from 'react';


function App(props) {
  const [info, setInfo]=useState(1);
  return (
    <BrowserRouter>
    <div className="App">
        <Bar info={info} setInfo={setInfo}/>
        <Home info={info}/>        
        <Routes>
            <Route path='/Home' element={<Projects info={info}/>}/>
            <Route path='/Home' element={<Home info={info}/>}/>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
