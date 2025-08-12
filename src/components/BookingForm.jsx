import React, { useState } from 'react';
import './BookingForm.css';

export default function BookingForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
    occasion: ''
  });
  const [errors, setErrors] = useState({});
  const [confirmed, setConfirmed] = useState(null);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email is required';
    if (!form.date) e.date = 'Date is required';
    if (!form.time) e.time = 'Time is required';
    if (!form.guests || Number(form.guests) < 1) e.guests = 'At least 1 guest';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    // simulate save
    setConfirmed({
      ...form,
      id: Date.now()
    });
    setErrors({});
  };

  return (
    <div className="booking-form-wrapper">
      <form className="booking-form" onSubmit={handleSubmit} aria-label="Booking form">
        <div className="field">
          <label htmlFor="name">Full name</label>
          <input id="name" name="name" value={form.name} onChange={handleChange} aria-required="true" aria-invalid={!!errors.name} />
          {errors.name && <div role="alert" className="error">{errors.name}</div>}
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" value={form.email} onChange={handleChange} aria-required="true" aria-invalid={!!errors.email} />
          {errors.email && <div role="alert" className="error">{errors.email}</div>}
        </div>

        <div className="row">
          <div className="field">
            <label htmlFor="date">Date</label>
            <input id="date" name="date" type="date" value={form.date} onChange={handleChange} aria-required="true" />
            {errors.date && <div role="alert" className="error">{errors.date}</div>}
          </div>

          <div className="field">
            <label htmlFor="time">Time</label>
            <input id="time" name="time" type="time" value={form.time} onChange={handleChange} aria-required="true" />
            {errors.time && <div role="alert" className="error">{errors.time}</div>}
          </div>
        </div>

        <div className="row">
          <div className="field">
            <label htmlFor="guests">Guests</label>
            <input id="guests" name="guests" type="number" min="1" value={form.guests} onChange={handleChange} />
            {errors.guests && <div role="alert" className="error">{errors.guests}</div>}
          </div>

          <div className="field">
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" name="occasion" value={form.occasion} onChange={handleChange}>
              <option value="">Select an option</option>
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Business</option>
            </select>
          </div>
        </div>

        <div className="actions">
          <button type="submit" className="btn">Confirm booking</button>
        </div>
      </form>

      {confirmed && (
        <aside className="confirmation" aria-live="polite">
          <h3>Booking confirmed</h3>
          <p><strong>Name:</strong> {confirmed.name}</p>
          <p><strong>Date & time:</strong> {confirmed.date} {confirmed.time}</p>
          <p><strong>Guests:</strong> {confirmed.guests}</p>
          <p className="muted">Booking ID: {confirmed.id}</p>
        </aside>
      )}
    </div>
  );
}
