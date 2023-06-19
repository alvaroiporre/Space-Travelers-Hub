import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/rockets" element={<h1>Rockets</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
