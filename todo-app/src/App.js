import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ManualPage from './ManualPage';

function App() {
  return (
    <BrowserRouter>
    <nav className="navigationBar">
      <ul>
        <li className="firstPage">
          <Link to="/">Welcome</Link>
        </li>
        <li className="secondPage">
          <Link to="todos">Todos</Link>
        </li>
        
        <li className="ManualPage">
          <Link to="manual">Manual</Link>
        </li>
      </ul>
      </nav> 
      <Routes>
        <Route path="/" element={<FirstPage/>} />
        <Route path="todos" element={<SecondPage/>}/>
        <Route path="manual" element={<ManualPage/>}/> 
      </Routes>
    </BrowserRouter>
  ) 
};

export default App;
