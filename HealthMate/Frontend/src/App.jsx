import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from"./components/Dashboard";
import SymptomChecker from "./components/SymptomChecker";
import AppointmentPage from "./components/AppointmentPage";
import ProfilePage from "./components/ProfilePage";
import HealthStatus from "./components/HealthStatus";

function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
        <Routes>
        <Route path="/" element={<Dashboard />} />
          <Route path="/Symptom-Checker" element={<SymptomChecker />} />
          <Route path="/appointments" element={<AppointmentPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/Health-Status" element={<HealthStatus/>} />
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

