// import logo from './logo.svg';
// import './App.css';
import axios from 'axios'
import Loginbage from './components/login/login';
import React from 'react';
import Register from './components/login/register';
//import 'semantic-ui-css/semantic.min.css'
import HomePage from './components/homepage';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Admin from './components/admin/admin';
import AdminHomePage from './components/admin/adminHomePage';


function App() {
  const [data, setData] = React.useState('')

  React.useEffect(() => {
      getAllData()
  }, [])

  const getAllData = () => {
      axios.get('https://sweets-in-progress.herokuapp.com/api/user/')
          .then(res => {
              console.log(res.data)
              if (res.status === 200) {
                  setData(res.data)
              }
          }).catch(err => {
              console.log('Error on getting data')
          })
  }
  return (
    <div className="App">
     <Router>
     <div>
     {/* <Nav/> */}
     <Routes>]
            <Route  path='/' element={<Loginbage data={data}/>} />
            <Route  path='/register'  element={<Register/>} />
            <Route  path='/homepage'  element={<HomePage data={data}/>} />
            <Route  path='/admin'  element={<Admin data={data}/>} />
            <Route  path='/adminHomePage'  element={<AdminHomePage data={data}/>} />

      </Routes>
      </div>
     </Router>

    </div>
  );
}

export default App;
