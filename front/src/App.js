import './App.css';
import { HashRouter, Route, Routes } from "react-router-dom";

import ToTop from './components/commons/ToTop'; 
import Navbar from './components/Navbar';

import MainPage from "./pages/MainPage";
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import DetailsPage from './pages/DetailsPage';

function App() {
  return (
    <HashRouter className='App'>
      <div>
        <ToTop />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
