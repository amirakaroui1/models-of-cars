import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import HomePage from './HomePage';
import AddCar from './AddCar';
import UpdateCar from './UpdateCar.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          Home
        </NavLink>
        <NavLink to="/Add-Car" className={({ isActive }) => (isActive ? 'active' : '')}>
          Add Car
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Add-Car" element={<AddCar />} />
        <Route path="/update-car/:id" element={<UpdateCar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;