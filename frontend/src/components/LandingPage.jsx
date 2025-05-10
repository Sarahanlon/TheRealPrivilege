import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      <h1>The Real Privilege Begins Here</h1>
      <p>
        Step inside a world where desire meets discretion, and where curated companionship is reimagined for modern seekers.<br /><br />
        Your journey starts now—whether you’re ready to begin, or returning to continue your private experience.
      </p>
      <Link to="/signup">
        <button>Join Now</button>
      </Link>
      <Link to="/login">
        <button>Log In</button>
      </Link>
    </div>
  );
}

export default LandingPage;
