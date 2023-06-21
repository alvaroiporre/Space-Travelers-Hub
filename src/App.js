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
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/my-profile" element={<h1>My Profile</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
