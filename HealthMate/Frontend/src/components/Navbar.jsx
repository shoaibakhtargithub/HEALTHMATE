// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // For optional styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">HealthMate</h1>
      <ul className="navbar-links">
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/symptom-checker">Symptom Checker</Link>
        </li>
        <li>
          <Link to="/appointments">Appointments</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;


