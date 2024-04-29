import React from 'react';
import './App.css';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import LoginScreen from './Components/LoginScreen/LoginScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
