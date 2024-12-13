import React, { useState } from 'react';
import '../components-css/authpage.css';

const Authpage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <form>
          {!isLogin && <input type="text" placeholder="Full Name" required />}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          {!isLogin && <input type="password" placeholder="Confirm Password" required />}
          <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>
        <p>
          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}{' '}
          <span onClick={toggleAuthMode}>
            {isLogin ? 'Sign Up' : 'Login'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Authpage;
