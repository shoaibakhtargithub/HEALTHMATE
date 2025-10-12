import React from "react";
import "./ProfilePage.css";
import photo1 from '/src/assets/photo1.jpg';



const ProfilePage = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img
          src={photo1}
          alt="Profile"
          className="profile-picture"
        />
        <h1 className="profile-name">shoaib Mirza</h1>
        <p className="profile-email">Shoaib@mirza.com</p>
      </div>

      <div className="profile-info">
        <h2>Personal Information</h2>
        <p><strong>Date of Birth:</strong> January 1, 2000</p>
        <p><strong>Gender:</strong> Male</p>
        <p><strong>Phone Number:</strong> +91 734 567 890</p>
        <p><strong>Blood Group:</strong> O+</p>
      </div>

      <div className="profile-health">
        <h2>Medical Details</h2>
        <p><strong>Height:</strong> 5'9" (175 cm)</p>
        <p><strong>Weight:</strong> 70 kg</p>
        <p><strong>Allergies:</strong> None</p>
        <p><strong>Current Medications:</strong> None</p>
      </div>

      <div className="profile-actions">
        <button className="edit-profile-button">Edit Profile</button>
        <button className="logout-button">Logout</button>
      </div>
    </div>
  );
};

export default ProfilePage;
