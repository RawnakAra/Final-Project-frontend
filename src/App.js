// import logo from './logo.svg';
// import './App.css';
import Loginbage from './components/login';
import React from 'react';
import Register from './components/register';
//import 'semantic-ui-css/semantic.min.css'
import HomePage from './components/homepage';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  return (
    <div className="App">
     <Router>
     <div>
     {/* <Nav/> */}
     <Routes>
            <Route  path='/login' element={<Loginbage/>} />
            <Route  path='/register'  element={<Register/>} />
            <Route  path='/homepage'  element={<HomePage/>} />
      </Routes>
      </div>
     </Router>

    </div>
  );
}

export default App;
