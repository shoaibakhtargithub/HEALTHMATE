import React, { useState } from "react";
import "./AppointmentPage.css";

const AppointmentPage = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      date: "25 Jan 2025",
      time: "10:30 AM",
      doctor: "Dr. Pankaj Kumar",
      specialization: "Dermatologist",
      status: "Confirmed",
    },
    {
      id: 2,
      date: "30 Jan 2025",
      time: "2:00 PM",
      doctor: "Dr. Pankaj Kumar",
      specialization: "Cardiologist",
      status: "Pending",
    },
  ]);

  const [newAppointment, setNewAppointment] = useState({
    date: "",
    time: "",
    reason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setAppointments([
      ...appointments,
      {
        id: appointments.length + 1,
        date: newAppointment.date,
        time: newAppointment.time,
        doctor: "To be assigned",
        specialization: newAppointment.reason,
        status: "Pending",
      },
    ]);

    setNewAppointment({ date: "", time: "", reason: "" });
  };

  return (
    <div className="appointment-page">
      <h1 className="page-title">📅 My Appointments</h1>

      {/* APPOINTMENT LIST */}
      <div className="appointment-section">
        <h2>Upcoming Appointments</h2>

        {appointments.length ? (
          <div className="appointment-grid">
            {appointments.map((appt) => (
              <div className="appointment-card" key={appt.id}>
                <div className="appointment-header">
                  <span className="appt-date">{appt.date}</span>
                  <span className={`status ${appt.status.toLowerCase()}`}>
                    {appt.status}
                  </span>
                </div>

                <p><strong>Time:</strong> {appt.time}</p>
                <p><strong>Doctor:</strong> {appt.doctor}</p>
                <p><strong>Specialization:</strong> {appt.specialization}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="empty-text">No appointments scheduled.</p>
        )}
      </div>

      {/* BOOK APPOINTMENT */}
      <div className="appointment-section">
        <h2>Book New Appointment</h2>

        <form className="appointment-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={newAppointment.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Time</label>
            <input
              type="time"
              name="time"
              value={newAppointment.time}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Reason / Specialization</label>
            <input
              type="text"
              name="reason"
              placeholder="e.g. Cardiology, Skin problem"
              value={newAppointment.reason}
              onChange={handleChange}
              required
            />
          </div>

          <button className="primary-btn" type="submit">
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentPage;
