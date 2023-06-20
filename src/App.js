import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Rockets from './components/Rockets';
import NavBar from './components/NavBar';
import Missions from './components/Missions';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
