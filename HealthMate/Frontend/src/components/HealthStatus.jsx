import React from "react";
import "./HealthStatus.css";

const HealthStatus = () => {
  const vitals = {
    heartRate: 72,
    bloodPressure: "120/80",
    spO2: 98,
    temperature: "98.6°F",
    bmi: 22.5,
    bmiCategory: "Normal",
    steps: 8000,
    caloriesBurned: 500,
    sleepHours: 7,
    hydration: "2.5L",
  };

  return (
    <div className="health-status-container">
      <h1 className="title">Health Status</h1>

      {/* Personal Info */}
      <section className="section personal-info">
        <h2>Personal Information</h2>
        <p><strong>Name:</strong> shoaib mirza</p>
        <p><strong>Age:</strong> 24</p>
        <p><strong>Gender:</strong> Male</p>
        <p><strong>Height:</strong> 5'9"</p>
        <p><strong>Weight:</strong> 70 kg</p>
      </section>

      {/* Vitals Overview */}
      <section className="section vitals">
        <h2>Vitals Overview</h2>
        <p><strong>Heart Rate:</strong> {vitals.heartRate} bpm</p>
        <p><strong>Blood Pressure:</strong> {vitals.bloodPressure}</p>
        <p><strong>Oxygen Saturation (SpO2):</strong> {vitals.spO2}%</p>
        <p><strong>Body Temperature:</strong> {vitals.temperature}</p>
      </section>

      {/* BMI */}
      <section className="section bmi">
        <h2>Body Mass Index (BMI)</h2>
        <p><strong>BMI Value:</strong> {vitals.bmi}</p>
        <p><strong>Category:</strong> {vitals.bmiCategory}</p>
      </section>

      {/* Activity Tracker */}
      <section className="section activity-tracker">
        <h2>Activity Tracker</h2>
        <p><strong>Steps Walked:</strong> {vitals.steps}</p>
        <p><strong>Calories Burned:</strong> {vitals.caloriesBurned} kcal</p>
      </section>

      {/* Sleep Tracker */}
      <section className="section sleep-tracker">
        <h2>Sleep Tracker</h2>
        <p><strong>Hours Slept:</strong> {vitals.sleepHours} hrs</p>
      </section>

      {/* Hydration */}
      <section className="section hydration">
        <h2>Hydration Level</h2>
        <p><strong>Water Intake:</strong> {vitals.hydration}</p>
      </section>

      {/* Recommendations */}
      <section className="section recommendations">
        <h2>Health Recommendations</h2>
        <ul>
          <li>Walk 10,000 steps daily.</li>
          <li>Drink at least 3L of water.</li>
          <li>Sleep 7-8 hours a night.</li>
          <li>Maintain a balanced diet.</li>
        </ul>
      </section>
    </div>
  );
};

export default HealthStatus;
