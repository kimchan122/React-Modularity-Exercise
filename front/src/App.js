import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Globalstyle } from './globalstyle/Globalstyle';

import MainPage from './pages/MainPage';
import Page1Page from './pages/Page1Page';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Globalstyle />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/page1' element={<Page1Page />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;