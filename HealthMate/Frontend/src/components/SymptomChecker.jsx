import React, { useState } from "react";
import "./SymptomChecker.css";
import { SentimentSatisfied, MedicalServices, Search } from "@mui/icons-material";

const SymptomChecker = () => {
  const [symptom, setSymptom] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (symptom.toLowerCase().includes("fever")) {
      setResult("You may have a viral or bacterial infection. Please consult a doctor.");
    } else if (symptom.toLowerCase().includes("cough")) {
      setResult("Persistent coughs could be due to a cold, allergy, or other causes. Stay hydrated.");
    } else {
      setResult("Symptom not recognized. Please consult a healthcare professional.");
    }
  };

  return (
    <div className="symptom-checker-container">
      <h1 className="symptom-checker-title">
        <MedicalServices style={{ fontSize: "2.5rem", marginRight: "10px", color: "#1976d2" }} />
        Symptom Checker
      </h1>
      <form className="symptom-checker-form" onSubmit={handleSubmit}>
        <label htmlFor="symptom" className="form-label">
          <SentimentSatisfied style={{ marginRight: "8px" }} />
          Enter your symptoms:
        </label>
        <input
          type="text"
          id="symptom"
          className="form-input"
          placeholder="e.g., fever, cough"
          value={symptom}
          onChange={(e) => setSymptom(e.target.value)}
        />
        <button type="submit" className="form-button">
          <Search style={{ marginRight: "5px" }} />
          Check
        </button>
      </form>
      {result && <p className="result-text">{result}</p>}
    </div>
  );
};

export default SymptomChecker;

