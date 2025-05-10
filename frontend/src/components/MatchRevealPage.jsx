import React from 'react';
import { Link } from 'react-router-dom';

function MatchRevealPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.4rem', marginBottom: '20px' }}>
        ✨ Your Match Has Been Chosen ✨
      </h1>

      {/* Placeholder Domme Image */}
      <div style={{ marginBottom: '20px' }}>
        <img
          src="https://via.placeholder.com/150x200.png?text=Queen+Silhouette"
          alt="Domme Silhouette"
          style={{ borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.5)' }}
        />
      </div>

      {/* Domme Intro */}
      <h2 style={{ fontSize: '1.8rem', color: '#d4af37', marginBottom: '10px' }}>
        Queen Selene
      </h2>
      <p style={{ fontSize: '1.1rem', marginBottom: '30px' }}>
        You stand before <strong>Queen Selene</strong>, the embodiment of elegance, discipline, and exquisite cruelty.
      </p>

      {/* Domme Message */}
      <div style={{ backgroundColor: '#1a1a1a', padding: '20px', borderRadius: '10px', marginBottom: '40px' }}>
        <p style={{ fontStyle: 'italic', lineHeight: '1.6' }}>
          “Welcome, little one. You’ve been granted a rare privilege, but know this: I expect nothing less than your complete devotion.
          Step forward, if you dare…”
        </p>
      </div>

      {/* Proceed Button */}
      <div style={{ marginBottom: '20px' }}>
        <Link to="/consent">
          <button style={{ padding: '12px 25px', fontSize: '1rem', backgroundColor: '#b30000', color: 'white', border: 'none', borderRadius: '20px', cursor: 'pointer' }}>
            Begin My Training
          </button>
        </Link>
      </div>

      {/* Optional Explore Button */}
      <div>
        <Link to="/coming-soon">
          <button style={{ padding: '10px 20px', fontSize: '0.9rem', backgroundColor: '#4b0082', color: 'white', border: 'none', borderRadius: '20px', cursor: 'pointer' }}>
            Not Ready Yet? Explore Other Matches
          </button>
        </Link>
      </div>
    </div>
  );
}

export default MatchRevealPage;
