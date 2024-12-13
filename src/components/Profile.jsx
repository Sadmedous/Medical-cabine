import React, { useState } from 'react';
import '../components-css/profile.css';

const Profile = () => {
  const [profile, setProfile] = useState({
    fullName: "John Doe",
    age: 30,
    bloodType: "O+",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    profilePicture: "https://via.placeholder.com/150",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  return (
    <div className="profile">
      <h2>Profile</h2>
      <div className="profile-picture">
        <img src={profile.profilePicture} alt="Profile" />
        <input
          type="url"
          name="profilePicture"
          placeholder="Profile Picture URL"
          value={profile.profilePicture}
          onChange={handleInputChange}
        />
      </div>
      <div className="profile-details">
        <div>
          <label>Full Name:</label>
          <p>{profile.fullName}</p>
        </div>
        <div>
          <label>Age:</label>
          <p>{profile.age}</p>
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={profile.phone}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Blood Type:</label>
          <input
            type="text"
            name="bloodType"
            value={profile.bloodType}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
