import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './features/signup';
import Login from './features/login';
import Layout from './components/Layout';
import Home from './pages/home';
import Main from './pages/main';


function App() {

  return (
    <div className="App">
      <Routes>
          <Route path="/" element=<Layout />>
          <Route index element=<Home/>/>
            <Route path='login' element={<Login/>} />
            <Route path='signup' element={<Signup/>} />
            <Route path='todolist' element={<Main/>} />  
          </Route>
      </Routes>
    </div>
  );
}

export default App;
