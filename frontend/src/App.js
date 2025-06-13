import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavigationBar from './components/NavigationBar';
import SolarTracker from './pages/SolarTracker';
import RescueBot from './pages/RescueBot';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solar" element={<SolarTracker />} />
        <Route path="/rescue" element={<RescueBot />} />
        <Route path="/" element={<div style={{ padding: "2rem" }}><h1>Bienvenido a tu Proyecto IoT</h1></div>} />
      </Routes>
    </Router>
  );
}

export default App;
