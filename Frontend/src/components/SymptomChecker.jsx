import React, { useState } from "react";
import "./SymptomChecker.css";
import {
  SentimentSatisfied,
  MedicalServices,
  Search,
  Info,
} from "@mui/icons-material";

const SymptomChecker = () => {
  const [symptom, setSymptom] = useState("");
  const [result, setResult] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const value = symptom.toLowerCase();

    if (value.includes("fever")) {
      setResult(
        "You may have a viral or bacterial infection. Please monitor your temperature and consult a doctor if it persists."
      );
      setType("warning");
    } else if (value.includes("cough")) {
      setResult(
        "Coughs can be caused by cold, allergy, or pollution. Stay hydrated and rest well."
      );
      setType("info");
    } else {
      setResult(
        "Symptoms not clearly identified. Please consult a healthcare professional for accurate diagnosis."
      );
      setType("info");
    }
  };

  return (
    <div className="symptom-page">
      <div className="symptom-card">
        <h1 className="symptom-title">
          <MedicalServices className="icon" />
          Symptom Checker
        </h1>

        <p className="subtitle">
          Enter your symptoms to get basic health guidance
        </p>

        <form onSubmit={handleSubmit}>
          <label className="form-label">
            <SentimentSatisfied />
            Your symptoms
          </label>

          <input
            type="text"
            className="form-input"
            placeholder="e.g. fever, cough, headache"
            value={symptom}
            onChange={(e) => setSymptom(e.target.value)}
          />

          <button type="submit" className="form-button">
            <Search />
            Check Symptoms
          </button>
        </form>

        {result && (
          <div className={`result-box ${type}`}>
            <Info className="result-icon" />
            <p>{result}</p>
          </div>
        )}

        <div className="disclaimer">
          ⚠️ This tool does not replace professional medical advice.
        </div>
      </div>
    </div>
  );
};

export default SymptomChecker;
