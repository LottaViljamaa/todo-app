import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";

function App() {
  return (
    <BrowserRouter>
    <nav className="navigaatiopalkki">
      <ul>
        <li className="ensimmainenSivu">
          <Link to="/">Tervetuloa</Link>
        </li>
        <li className="ToinenSivu">
          <Link to="tehtavat">Tehtävät</Link>
        </li>
        
        <li className="KolmasSivu">
          <Link to="ohjeet-tietoa">Ohjeet/tietoa</Link>
        </li>
      </ul>
      </nav> 
      <Routes>
        <Route path="/" element={<FirstPage/>} />
        <Route path="tehtavat" element={<SecondPage/>}/>
        <Route /> 
        </Routes>
    </BrowserRouter>
  ) 
};

export default App;
