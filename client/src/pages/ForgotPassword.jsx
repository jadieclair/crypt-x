import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { database } from "./FirebaseConfig";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css"; // Import your CSS file

function ForgotPassword() {
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailVal = e.target.email.value;
    sendPasswordResetEmail(database, emailVal)
      .then((data) => {
        alert("Check your email");
        history("/");
      })
      .catch((err) => {
        alert(err.code);
      });
  };

  return (
    <div className="App">
      <h1 className="forgot">Forgot Password</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          name="email"
          className="email-input" // Apply the email-input class
          placeholder="Enter email" // Placeholder text
        />
        <br />
        <br />
        <button className="reset">Reset</button>
      </form>
    </div>
  );
}

export default ForgotPassword;
