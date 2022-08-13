import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from './pages/MainPage';
import { Globalstyle } from './globalstyle/Globalstyle';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Globalstyle />
        <Routes>
          <Route path='/' element={<MainPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;