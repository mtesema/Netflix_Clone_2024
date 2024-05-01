import React from 'react';
import './App.css';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import SignUpScreen from './Components/SignUpScreen/SignUpScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route path="/login" element={<SignUpScreen />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
