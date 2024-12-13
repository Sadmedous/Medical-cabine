import React from 'react';
import "../components-css/landingpage.css";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authed } from '../redux/userActions'; // Replace with actual action import
// import Authpage from "./Authpage.jsx";
// import Calendar from './Calendar.jsx';

function Landingpage() {
  const { auth } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Perform logout logic
    dispatch(authed({ stayConnected: false, authed: false }));
  };

  return (
    <div className="landing-page">
      <header className="header">
        <div className="logo">MediCabine</div>
        <nav className="nav">
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
            {!auth ? (
              <li><Link to="/auth">Login/Signup</Link></li>
            ) : (
              <>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/recent-activity">History</Link></li>
                <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
              </>
            )}
          </ul>
        </nav>
      </header>

      <section className="hero">
        <h1>Welcome to MediCabine</h1>
        <p>Your trusted partner for accessible and modern healthcare solutions.</p>
      </section>

      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <h3>Telemedicine</h3>
            <p>Consult with doctors online from the comfort of your home.</p>
          </div>
          <div className="service-card">
            <h3>Diagnostics</h3>
            <p>Quick and accurate health diagnostics at your convenience.</p>
          </div>
          <div className="service-card">
            <h3>Pharmacy</h3>
            <p>Get your prescriptions filled quickly and efficiently.</p>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <h2>About Us</h2>
        <p>
          MediCabine is committed to bringing cutting-edge medical technology to 
          communities everywhere. Our goal is to provide accessible, efficient, 
          and high-quality healthcare for everyone.
        </p>
      </section>

      {/* Removed static AuthPage and Calendar sections, as routing handles them */}
      <footer className="footer">
        <p>&copy; 2024 MediCabine. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Landingpage;
