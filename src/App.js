import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/NavBar';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route />
      </Routes>
    </div>    
  );
}

export default App;
