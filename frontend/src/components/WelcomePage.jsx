import React from 'react';
import { Link } from 'react-router-dom';

function WelcomePage() {
  return (
    <div>
      <h1>Your Exclusive Invitation Awaits</h1>
      <p>
        Thank you for stepping forward. <strong>The Real Privilege</strong> is a world of curated companionship and sensual discovery—designed for discerning souls seeking more.<br /><br />
        To craft your perfect experience, we’ll begin with a few simple questions. Your journey is yours to shape—and we’re here to make it exquisite.
      </p>
      <Link to="/general-intake">
        <button>Reveal Your Desires</button>
      </Link>
    </div>
  );
}

export default WelcomePage;


