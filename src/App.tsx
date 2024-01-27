import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MobileChat from "./pages/MobileChat/MobileChat";
import MainApp from "./pages/MainApp/MainApp";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<MobileChat/>}></Route>
              <Route path="/main-app" element={<MainApp/>}></Route>
          </Routes>
      </Router>
  );
}

export default App;
