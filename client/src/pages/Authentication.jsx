import React, { useState } from 'react';
import '../form.css';
import { useNavigate } from 'react-router-dom';

const Authentication = () => {
  const navigate = useNavigate();

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
      // Continue with registration logic (replace with your actual logic)
      console.log('User registered:', user);
      // Redirect to the home page upon successful registration
      navigate('/home');
    }
  };

  const handleLogin = () => {
    if (validateUser()) {
      // Check if the user exists (replace this with your actual logic)
      const userExists = checkIfUserExists(user);

      if (userExists) {
        console.log('User logged in:', user);
        // Redirect to the home page upon successful login
        navigate('/home');
      } else {
        // Display an error message if the user does not exist
        setErrors({ ...errors, login: 'User does not exist' });
      }
    }
  };

  // Function to check if the user exists (replace with your actual logic)
  const checkIfUserExists = (user) => {
    // Replace this with your actual user existence check logic
    return true; // For demonstration, always return true
  };

  return (
    <div className="container">
      <div className="form-content">
        <h2>{isRegistering ? 'Register' : 'Login'}</h2>
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
          {errors.login && <p className="error">{errors.login}</p>}
        </div>
        <button onClick={isRegistering ? handleRegistration : handleLogin}>
          {isRegistering ? 'Register' : 'Login'}
        </button>
        <p>
          {isRegistering ? "Already have an account?" : "Don't have an account?"}
          <span onClick={() => setIsRegistering(!isRegistering)}>
            {isRegistering ? 'Login' : 'Register'}
          </span>
        </p>
      </div>
      <div className="image-container">
        <img src='./blue.gif' width='600px' alt='image1' />
      </div>
    </div>
  );
};

export default Authentication;