import React from 'react';
import { BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import HomePage from "./HomePage";
import AddCar from "./AddCar";
import BuyCar from "./BuyCar";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <nav>
      <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
      <NavLink to="/Add-Car" className={({ isActive }) => isActive ? 'active' : ''}>Add Car</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Add-Car" element={<AddCar />} />
        <Route path="/buy-car/:id" element={<BuyCar />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;