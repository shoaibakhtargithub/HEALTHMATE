import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import SymptomChecker from "./components/SymptomChecker";
import AppointmentPage from "./components/AppointmentPage";
import ProfilePage from "./components/ProfilePage";
import HealthStatus from "./components/HealthStatus";

import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";

function App() {
  // 🔐 Temporary auth state (later replace with JWT / backend)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      {/* ✅ Show Navbar ONLY when logged in */}
      {isLoggedIn && <Navbar />}

      {/* ❌ remove maxWidth restriction */}
      <main>
        <Routes>
          {/* ---------- AUTH ROUTES ---------- */}
          {!isLoggedIn ? (
            <>
              <Route path="/" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          ) : (
            <>
              {/* ---------- PROTECTED ROUTES ---------- */}
              <Route path="/" element={<Dashboard />} />
              <Route path="/symptom-checker" element={<SymptomChecker />} />
              <Route path="/appointments" element={<AppointmentPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/health-status" element={<HealthStatus />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          )}
        </Routes>
      </main>
    </Router>
  );
}

export default App;

