// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage'; 
import TrackShipmentPage from './pages/TrackShipmentPage';
import NotFoundPage from './pages/NotFoundPage'; 
import './App.css';
import './fonts.css'; 

const styles = {
  fontFamily: 'Cairo, sans-serif', // Use Cairo font, fallback to sans-serif
};

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/track" element={<TrackShipmentPage />} />
          <Route path="*" element={<NotFoundPage />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;