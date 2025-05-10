import React from 'react';
import { Link } from 'react-router-dom';

function ConfessionFeedPage() {
  return (
    <div>
      <h1>Confession Feed Page</h1>
      <p>This is where users can submit and view confessions.</p>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

export default ConfessionFeedPage;


