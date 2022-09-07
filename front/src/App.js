import './App.scss';
import { HashRouter, Route, Routes } from "react-router-dom";

import ToTop from './components/commons/ToTop'; 
import Navbar from './components/Navbar';

import MainPage from "./pages/MainPage";
import SSI from './pages/SSI';
import ContactPage from './pages/ContactPage';
import DetailsPage from './pages/DetailsPage';
import CalendarPage from './pages/CalendarPage';

function App() {
  return (
    <HashRouter className='App'>
      <div>
        <ToTop />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/SSI" element={<SSI/>} />
          {/* <Route path="/details" element={<DetailsPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/contact" element={<ContactPage />} /> */}
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
