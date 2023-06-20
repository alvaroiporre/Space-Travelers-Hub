import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import NavBar from './components/NavBar';
import store from './redux/store';
import Rockets from './components/Rockets';

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

export default App;
