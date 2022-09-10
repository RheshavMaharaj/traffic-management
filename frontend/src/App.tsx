import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import ModalPopup from './components/Modal/ModalPopup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/modal" element={<ModalPopup />} />
      </Routes>
    </div>
  );
}

export default App;
