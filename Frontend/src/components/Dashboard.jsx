import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const user = {
    name: "Shoaib",
    age: 24,
    bloodGroup: "B+",
  };

  return (
    <div className="dashboard-page">
      {/* HEADER */}
      <div className="dashboard-header">
        <h1>Welcome back, {user.name} 👋</h1>
        <p>
          Age: {user.age} • Blood Group: {user.bloodGroup}
        </p>
      </div>

      {/* QUICK STATS */}
      <div className="quick-stats">
        <div className="quick-card">
          <span className="quick-value">22.4</span>
          <span className="quick-label">BMI</span>
        </div>
        <div className="quick-card">
          <span className="quick-value">120/80</span>
          <span className="quick-label">Blood Pressure</span>
        </div>
        <div className="quick-card">
          <span className="quick-value">95 mg/dL</span>
          <span className="quick-label">Sugar Level</span>
        </div>
        <div className="quick-card">
          <span className="quick-value">2</span>
          <span className="quick-label">Upcoming Appointments</span>
        </div>
        <div className="quick-card">
          <span className="quick-value">5</span>
          <span className="quick-label">Uploaded Reports</span>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="main-grid">
        {/* HEALTH TRENDS */}
        <div className="card large">
          <h3>📊 Health Trends</h3>
          <p className="muted">
            Track your BMI, sugar, and BP trends over time.
          </p>
          <div className="chart-placeholder">Chart will appear here</div>
        </div>

        {/* UPCOMING APPOINTMENT */}
        <div className="card">
          <h3>📅 Upcoming Appointment</h3>
          <p><strong>Doctor:</strong> Dr. Sharma</p>
          <p><strong>Date:</strong> 25 Jan 2026</p>
          <p><strong>Time:</strong> 10:30 AM</p>
        </div>

        {/* RECENT SYMPTOMS */}
        <div className="card">
          <h3>🧠 Recent Symptoms</h3>
          <p>Fever, Headache</p>
          <span className="tag warning">Possible Viral Infection</span>
        </div>

        {/* MEDICATIONS */}
        <div className="card">
          <h3>💊 Medications</h3>
          <ul>
            <li>Paracetamol – Morning</li>
            <li>Vitamin C – Daily</li>
          </ul>
        </div>

        {/* HEALTH ACTIVITY */}
        <div className="card">
          <h3>🏃 Health Activity</h3>
          <p>Steps Today: <strong>6,200</strong></p>
          <p>Sleep: <strong>7h 20m</strong></p>
        </div>

        {/* HEALTH INSIGHTS */}
        <div className="card">
          <h3>💡 Health Insights</h3>
          <ul className="tips">
            <li>✅ Your BMI is in a healthy range</li>
            <li>⚠️ Reduce sugar intake</li>
            <li>💧 Drink at least 2.5L water</li>
            <li>🏃 Walk 7,000+ steps daily</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
