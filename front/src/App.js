import logo from './logo.svg';
import './App.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <HashRouter>
        <Routes>      
          <Route path="/" element={<MainPage/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
