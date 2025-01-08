import React, { useState } from "react";
import "./ValidateLogin.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";

function ValidateLogin() {
  // State for form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Handler function for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation (can be expanded)
    if (email && password) {
      console.log("Form submitted with:", { email, password });
      navigate('/Home');
      // Proceed with your login logic (API call or authentication)
    } else {
      alert("Please fill in both fields.");
    }
  };

  return (
    <div className="container">
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <div className="inputGroup">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="input"
          />
        </div>
        <div className="inputGroup">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            className="input"
          />
        </div>
        <button type="submit" className="button">Sign In</button>
      </form>
    </div>
  );
}

export default ValidateLogin;
