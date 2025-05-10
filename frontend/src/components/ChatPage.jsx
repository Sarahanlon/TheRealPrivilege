import React from 'react';
import { Link } from 'react-router-dom';

function ChatPage() {
  return (
    <div>
      <h1>Chat Page</h1>
      <p>This is where the user will interact with their AI match.</p>
      <Link to="/consent">
        <button>Proceed to Consent & Contract</button>
      </Link>
    </div>
  );
}

export default ChatPage;
