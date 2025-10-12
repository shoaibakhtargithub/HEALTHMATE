import React, { useState } from "react";
import "./AppointmentPage.css";

const AppointmentPage = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      date: "2025-01-25",
      time: "10:30 AM",
      doctor: "Dr. Pankaj kumar",
      specialization: "Dermatologist",
      status: "Confirmed",
    },
    {
      id: 2,
      date: "2025-01-30",
      time: "2:00 PM",
      doctor: "Dr. Pankaj kumar",
      specialization: "Cardiologist",
      status: "Pending",
    },
  ]);

  const [newAppointment, setNewAppointment] = useState({
    name: "",
    date: "",
    time: "",
    reason: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("New appointment booked successfully!");
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
    setNewAppointment({ name: "", date: "", time: "", reason: "" });
  };

  return (
    <div className="appointment-container">
      <h1 className="appointment-title">My Appointments</h1>

      {/* Upcoming Appointments Section */}
      <div className="appointment-list">
        <h2>Upcoming Appointments</h2>
        {appointments.length > 0 ? (
          appointments.map((appt) => (
            <div key={appt.id} className="appointment-card">
              <p><strong>Date:</strong> {appt.date}</p>
              <p><strong>Time:</strong> {appt.time}</p>
              <p><strong>Doctor:</strong> {appt.doctor}</p>
              <p><strong>Specialization:</strong> {appt.specialization}</p>
              <p><strong>Status:</strong> {appt.status}</p>
            </div>
          ))
        ) : (
          <p>No appointments found.</p>
        )}
      </div>

      {/* New Appointment Booking Section */}
      <form className="appointment-form" onSubmit={handleSubmit}>
        <h2>Book a New Appointment</h2>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={newAppointment.name}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={newAppointment.date}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          name="time"
          value={newAppointment.time}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="reason">Reason for Appointment:</label>
        <input
          type="text"
          id="reason"
          name="reason"
          value={newAppointment.reason}
          onChange={handleInputChange}
          required
        />

        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentPage;
