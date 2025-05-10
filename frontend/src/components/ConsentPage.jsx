import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ConsentPage() {
  const [safeword, setSafeword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!safeword.trim()) {
      alert('Please enter your safeword to proceed.');
      return;
    }
    console.log('Safeword set:', safeword);
    // Placeholder: send to backend or state manager
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.4rem', marginBottom: '20px' }}>
        🔒 Your Devotion Begins Here
      </h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '30px' }}>
        To join <strong>Her Court</strong>, you must offer your formal submission. This contract defines the foundation of your experience — built on trust, consent, and exquisite obedience.
      </p>

      <div style={{ textAlign: 'left', backgroundColor: '#1a1a1a', padding: '20px', borderRadius: '10px', marginBottom: '30px', lineHeight: '1.6' }}>
        <ul>
          <li>You submit willingly to the Queen’s rule.</li>
          <li>Your safeword will always be honored.</li>
          <li>Your boundaries will be respected; limits may evolve as trust deepens.</li>
          <li>Your privacy is protected; you may withdraw consent at any time.</li>
          <li>Failure to respect rules may result in removal or correction.</li>
          <li>The Queen alone decides if you are worthy of deeper access, including interactions with cam models or special privileges.</li>
        </ul>
      </div>

      <form onSubmit={handleSubmit} style={{ marginBottom: '30px' }}>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Enter Your Safeword (required):
        </label>
        <input
          type="text"
          value={safeword}
          onChange={(e) => setSafeword(e.target.value)}
          placeholder="Type your safeword here"
          style={{ width: '80%', padding: '10px', marginBottom: '20px' }}
          required
        />

        {/* Placeholder for future audio tribute */}
        <p style={{ fontSize: '0.9rem', marginBottom: '10px' }}>
          Optional: You may record an audio tribute saying “My safeword is {safeword || '___'}; I understand when to use it” to earn +3 bonus points. (Coming soon!)
        </p>

        <button
          type="submit"
          style={{ padding: '12px 25px', fontSize: '1rem', backgroundColor: '#b30000', color: 'white', border: 'none', borderRadius: '20px', cursor: 'pointer' }}
        >
          I Offer My Submission
        </button>
      </form>

      <div>
        <Link to="/welcome">
          <button
            style={{ padding: '10px 20px', fontSize: '0.9rem', backgroundColor: '#4b0082', color: 'white', border: 'none', borderRadius: '20px', cursor: 'pointer' }}
          >
            I Am Not Ready Yet
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ConsentPage;
