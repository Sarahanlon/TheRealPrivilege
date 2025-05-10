import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
      } else {
        setMessage(data.message || 'Something went wrong.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred.');
    }
  };

  return (
    <div>
      <h1>Signup Page</h1>
      <p>Enter your email and password to create an account.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br />
        <button type="submit">Sign Up</button>
      </form>
      {message && <p>{message}</p>}
      <Link to="/welcome">
        <button>Skip to Welcome</button>
      </Link>
    </div>
  );
}

export default SignupPage;
