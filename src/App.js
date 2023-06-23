import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Rockets from './components/Rockets';
import NavBar from './components/NavBar';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/my-profile" element={<MyProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
