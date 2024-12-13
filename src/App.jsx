import React, { useEffect, useState } from 'react';
import { Route, Router, Routes, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import Cookies from 'js-cookie';
// import jwtDecode from 'jwt-decode';
import LandingPage from './components/Landingpage';
import Profile from './components/Profile';
import RecentActivity from './components/RecentActivity';
import AuthPage from './components/Authpage';
// import GlobalStyle from './styles/GlobalStyle';
import { authed} from './redux/userActions'; // Replace with actual imports

// PrivateRoute Component
const PrivateRoute = ({ isAuthenticated, children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : null;
};

// PublicRoute Component
const PublicRoute = ({ isAuthenticated, children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/profile');
    }
  }, [isAuthenticated, navigate]);

  return !isAuthenticated ? children : null;
};

const App = () => {
  const { auth, stayConnected } = useSelector((state) => state.user);
  // const { dark } = useSelector((state) => state.settings);
  // const existCookie = Cookies.get('access_token') ? true : false;
  // const dispatch = useDispatch();


  // const checkTokenValidity = () => {
  //   try {
  //     const { role } = jwtDecode(Cookies.get('access_token'));
  //     setRole(role);
  //   } catch (error) {
  //     // Handle invalid token
  //     console.error('Invalid Token');
  //   }
  // };

  // const handlePageUnload = (event) => {
  //   event.preventDefault();
  //   if (!stayConnected) {
  //     if (event.type === 'beforeunload') {
  //       // Optional: Handle token refresh or cleanup before page unload
  //     } else if (event.type === 'unload') {
  //       Cookies.remove('access_token');
  //       Cookies.remove('refresh_token');
  //       dispatch(authed({ stayConnected, authed: false }));
  //     }
  //   }
  //   dispatch(setActiveLink('Dashboard'));
  // };

  // useEffect(() => {
  //   window.addEventListener('beforeunload', handlePageUnload);
  //   return () => {
  //     window.removeEventListener('beforeunload', handlePageUnload);
  //   };
  // }, [stayConnected, dispatch]);

  // useEffect(() => {
  //   if (auth && existCookie) {
  //     checkTokenValidity();
  //   }
  // }, [auth, existCookie]);

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={
            <PublicRoute isAuthenticated={auth}>
              <LandingPage />
            </PublicRoute>
          }
        />
        <Route
          path="/auth"
          element={
            <PublicRoute isAuthenticated={auth}>
              <AuthPage />
            </PublicRoute>
          }
        />

        {/* Private Routes */}
        <Route
          path="/profile"
          element={
            <PrivateRoute isAuthenticated={auth}>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/recent-activity"
          element={
            <PrivateRoute isAuthenticated={auth}>
              <RecentActivity />
            </PrivateRoute>
          }
        />
      </Routes>
      </Router>
  );
};

export default App;
