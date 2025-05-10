import React from 'react';
import { Link } from 'react-router-dom';

function TaskPage() {
  return (
    <div>
      <h1>Task Page</h1>
      <p>This is where tasks and assignments will be displayed.</p>
      <Link to="/scenes">
        <button>Unlock Scenes</button>
      </Link>
    </div>
  );
}

export default TaskPage;

