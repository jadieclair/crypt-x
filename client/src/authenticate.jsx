import React, { useState } from 'react';
import './form.css';

const Authentication = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const validateUser = () => {
    let isValid = true;
    const newErrors = {};

    if (!user.username.trim()) {
      newErrors.username = 'Username is required';
      isValid = false;
    }

    if (!user.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(user.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (!user.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (user.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(newErrors);

    return isValid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleRegistration = () => {
    if (validateUser()) {
      // Continue with registration logic
      console.log('User registered:', user);
    }
  };

  const handleLogin = () => {
    if (validateUser()) {
      // Continue with login logic
      console.log('User logged in:', user);
    }
  };

  return (
    <div className="container">
      <div className="form-content">
        {isRegistering ? (
          <div>
            <h2>Register</h2>
            <div className="input-container">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={user.username}
                onChange={handleInputChange}
              />
              {errors.username && <p className="error">{errors.username}</p>}
            </div>
            <div className="input-container">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={user.email}
                onChange={handleInputChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="input-container">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={user.password}
                onChange={handleInputChange}
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <button onClick={handleRegistration}>Register</button>
            <p>
              Already have an account?{' '}
              <span onClick={() => setIsRegistering(false)}>Login</span>
            </p>
          </div>
        ) : (
          <div>
            <h2>Login</h2>
            <div className="input-container">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={user.email}
                onChange={handleInputChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="input-container">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={user.password}
                onChange={handleInputChange}
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <button onClick={handleLogin}>Login</button>
            <p>
              Don't have an account?{' '}
              <span onClick={() => setIsRegistering(true)}>Register</span>
            </p>
          </div>
        )}
      </div>
      <div className="image-container">
        <img src='./blue.gif' alt='image1'></img>
      </div>
    </div>
  );
};

export default Authentication;
