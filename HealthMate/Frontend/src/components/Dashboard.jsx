import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css"; // Import the CSS file for styling

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Welcome to HealthMate Dashboard</h1>
      <div className="dashboard-cards">
        {/* Symptom Checker Card */}
        <div className="dashboard-card">
          <h2>Symptom Checker</h2>
          <p>Check symptoms and get advice for better health decisions.</p>
          <Link to="/SymptomChecker" className="dashboard-link">
            Explore
          </Link>
        </div>

        {/* Appointments Card */}
        <div className="dashboard-card">
          <h2>Appointments</h2>
          <p>View and manage your upcoming doctor appointments.</p>
          <Link to="/appointments" className="dashboard-link">
            View Appointments
          </Link>
        </div>

        {/* Profile Card */}
        <div className="dashboard-card">
          <h2>Profile</h2>
          <p>Manage your personal health profile and medical history.</p>
          <Link to="/profile" className="dashboard-link">
            View Profile
          </Link>
        </div>

        {/* Health Stats Card */}
        <div className="dashboard-card">
          <h2>Health Status</h2>
          <p>Monitor and track your vital health statistics over time.</p>
          <Link to="/health-status" className="dashboard-link">
            Check Status
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
