import React, { useState } from 'react'; // Removed useRef since it is unused
import '../components-css/recent-activity.css';

const RecentActivity = () => {
  const [activities] = useState([
    { id: 1, day: "2024-12-10", time: "10:00 AM", reason: "Routine Checkup" },
    { id: 2, day: "2024-12-05", time: "2:00 PM", reason: "Follow-up Consultation" },
    { id: 3, day: "2024-11-28", time: "11:30 AM", reason: "Blood Test" },
  ]); // Removed setActivities since it's not being used

  const [selectedActivity, setSelectedActivity] = useState(null);

  return (
    <div className="recent-activity">
      <h2>Recent Activity</h2>
      <ul className="activity-list">
        {activities.map((activity) => (
          <li
            key={activity.id}
            className="activity-item"
            onClick={() => setSelectedActivity(activity)}
          >
            {activity.day} - {activity.time}
          </li>
        ))}
      </ul>

      {selectedActivity && (
        <div className="activity-details">
          <h3>Reservation Details</h3>
          <p>
            <strong>Day:</strong> {selectedActivity.day}
          </p>
          <p>
            <strong>Time:</strong> {selectedActivity.time}
          </p>
          <p>
            <strong>Reason:</strong> {selectedActivity.reason}
          </p>
          <button onClick={() => setSelectedActivity(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default RecentActivity;
