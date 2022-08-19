import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Routes } from "react-router-dom";

import Navbar from './components/Navbar';

import MainPage from "./pages/MainPage";
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <HashRouter className='App'>
      <div >
        <Navbar />
        <Routes>
          <Route path="#/" element={<MainPage />} />
          <Route path="#/about" element={<AboutPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
