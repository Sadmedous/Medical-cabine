import React, { useState } from 'react';
import '../components-css/calendar&reservation.css';

const Reservation = ({ day, time, onClose }) => {
  const [reason, setReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reservation made for ${day} at ${time}. Reason: ${reason}`);
    onClose();
  };

  return (
    <div className="reservation-popup">
      <div className="reservation-content">
        <h2>Make a Reservation</h2>
        <p>
          <strong>Day:</strong> {day} <br />
          <strong>Time:</strong> {time}
        </p>
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Reason for reservation"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
          ></textarea>
          <button type="submit">Submit Reservation</button>
        </form>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Reservation;
