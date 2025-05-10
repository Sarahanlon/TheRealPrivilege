import React from 'react';
import { Link } from 'react-router-dom';

function SceneUnlockPage() {
  return (
    <div>
      <h1>Scene Unlock Page</h1>
      <p>This is where users can unlock and view exclusive scenes.</p>
      <Link to="/confessions">
        <button>Go to Confession Feed</button>
      </Link>
    </div>
  );
}

export default SceneUnlockPage;

