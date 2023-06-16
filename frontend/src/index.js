import React from 'react';
import ReactDOM from 'react-dom/client';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import NavBar from './components/NavBar';
import LakePowellData from './pages/LakePowellData';
import Home from './pages/Home';
import {Resume} from './pages/Resume';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="main">
      <NavBar />
      <body>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={ <Home /> } />
            <Route path="/resume" element={<Resume />} />
            <Route path="/lake-powell-data" element={<LakePowellData />}/>
          </Routes>
        </BrowserRouter>
      </body>
      <footer>

      </footer>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
