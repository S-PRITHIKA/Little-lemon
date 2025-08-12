import React, { useState } from 'react';
import './Booking.css';

export default function Booking() {
  const [form, setForm] = useState({
    name: '',
    date: '',
    time: '',
    guests: '',
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!form.name) tempErrors.name = "Name is required.";
    if (!form.date) tempErrors.date = "Date is required.";
    if (form.date && new Date(form.date) < new Date()) tempErrors.date = "Date must be in the future.";
    if (!form.time) tempErrors.time = "Time is required.";
    if (!form.guests || form.guests < 1 || form.guests > 10) tempErrors.guests = "Guests must be between 1 and 10.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Booking successful!");
      setForm({ name: '', date: '', time: '', guests: '' });
    }
  };

  return (
    <div className="booking">
      <h2>Book your table here</h2>
      <form onSubmit={handleSubmit} aria-label="Booking Form">
        <label htmlFor="name">Name:</label>
        <input id="name" name="name" type="text" value={form.name} onChange={handleChange} />
        {errors.name && <span className="error">{errors.name}</span>}

        <label htmlFor="date">Date:</label>
        <input id="date" name="date" type="date" value={form.date} onChange={handleChange} />
        {errors.date && <span className="error">{errors.date}</span>}

        <label htmlFor="time">Time:</label>
        <input id="time" name="time" type="time" value={form.time} onChange={handleChange} />
        {errors.time && <span className="error">{errors.time}</span>}

        <label htmlFor="guests">Number of Guests:</label>
        <input id="guests" name="guests" type="number" value={form.guests} onChange={handleChange} min="1" max="10" />
        {errors.guests && <span className="error">{errors.guests}</span>}

        <button type="submit" className="cta-button">Submit</button>
      </form>
    </div>
  );
}
