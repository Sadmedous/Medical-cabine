import React, { useState } from 'react';
import '../components-css/calendar&reservation.css';
import Reservation from './Reservation';

const Calendar = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const times = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM"];

  return (
    <div className="calendar">
      <h2>Choose a Day for Your Consultation</h2>
      <div className="days">
        {days.map((day, index) => (
          <button
            key={index}
            className={`day-button ${selectedDay === day ? 'active' : ''}`}
            onClick={() => {
              setSelectedDay(day);
              setSelectedTime(null);
            }}
          >
            {day}
          </button>
        ))}
      </div>

      {selectedDay && (
        <div className="times">
          <h3>Available Times on {selectedDay}</h3>
          {times.map((time, index) => (
            <button
              key={index}
              className={`time-button ${selectedTime === time ? 'active' : ''}`}
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </button>
          ))}
        </div>
      )}

      {selectedTime && (
        <Reservation
          day={selectedDay}
          time={selectedTime}
          onClose={() => setSelectedTime(null)}
        />
      )}
    </div>
  );
};

export default Calendar;