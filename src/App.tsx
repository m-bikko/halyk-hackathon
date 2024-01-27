import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MobileChat from "./pages/MobileChat/MobileChat";
import MainApp from "./pages/MainApp";
import BuyPolis from "./pages/BuyPolis";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<MobileChat/>}></Route>
              <Route path="/main-app" element={<MainApp/>}></Route>
              <Route path="/buy-polis" element={<BuyPolis/>}></Route>
          </Routes>
      </Router>
  );
}

export default App;
