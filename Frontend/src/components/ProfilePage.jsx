import React from "react";
import "./ProfilePage.css";
import photo1 from "/src/assets/photo1.jpg";

const ProfilePage = () => {
  return (
    <div className="profile-page">
      
      {/* PROFILE INTRO */}
      <div className="profile-intro">
        <h2>Your personal health profile</h2>
        <p>Keep your information accurate to get better health insights.</p>
      </div>

      {/* PROFILE HEADER */}
      <div className="profile-header-card">
        <img src={photo1} alt="Profile" className="profile-avatar" />

        <h1 className="profile-name">Shoaib Mirza</h1>
        <p className="profile-email">shoaib@mirza.com</p>

        <span className="profile-status">✔ Health Status: Good</span>
      </div>

      {/* QUICK HEALTH SUMMARY */}
      <div className="health-summary">
        <div className="summary-card">
          <span className="summary-value">24</span>
          <span className="summary-label">Age</span>
        </div>
        <div className="summary-card">
          <span className="summary-value">O+</span>
          <span className="summary-label">Blood Group</span>
        </div>
        <div className="summary-card">
          <span className="summary-value">175 cm</span>
          <span className="summary-label">Height</span>
        </div>
        <div className="summary-card">
          <span className="summary-value">70 kg</span>
          <span className="summary-label">Weight</span>
        </div>
      </div>

      {/* PROFILE DETAILS */}
      <div className="profile-grid">
        <div className="profile-section">
          <h2>Personal Information</h2>
          <p><strong>Date of Birth:</strong> January 1, 2000</p>
          <p><strong>Gender:</strong> Male</p>
          <p><strong>Phone:</strong> +91 734 567 890</p>
          <p><strong>Blood Group:</strong> O+</p>
        </div>

        <div className="profile-section">
          <h2>Medical Details</h2>
          <p><strong>Height:</strong> 5'9" (175 cm)</p>
          <p><strong>Weight:</strong> 70 kg</p>
          <p><strong>Allergies:</strong> None</p>
          <p><strong>Medications:</strong> None</p>
        </div>

        <div className="profile-section muted">
          <h2>Medical Reports</h2>
          <p>No reports uploaded yet</p>
        </div>

        <div className="profile-section muted">
          <h2>Preferences</h2>
          <p>Notifications enabled</p>
          <p>Language: English</p>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="profile-actions">
        <button className="primary-btn">Edit Profile</button>
        <button className="danger-btn">Logout</button>
      </div>
    </div>
  );
};

export default ProfilePage;
