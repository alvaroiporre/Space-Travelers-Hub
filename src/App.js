import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Rockets from './components/Rockets';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/rockets" element={<h1>Rockets</h1>} />
          <Route path="/missions" element={<h1>Missions</h1>} />
        </Routes>
      </BrowserRouter>
      <Rockets />
    </div>
  );
}

export default App;
