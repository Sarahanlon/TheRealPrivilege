import React from 'react';
import { Link } from 'react-router-dom';

function ComingSoonPage() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px', textAlign: 'left' }}>
      <h1 style={{ fontSize: '2.2rem', marginBottom: '20px' }}>
        Explore More Experiences (Coming Soon)
      </h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '30px' }}>
        You’ve been matched to <strong>Her Court</strong>, but we know curiosity never stops there. 
        Below are a few other exclusive experiences that will soon be unlocked inside 
        <em> The Real Privilege</em>.
      </p>

      {/* Experience Block 1 */}
      <div style={{ marginBottom: '30px', border: '1px solid #d4af37', borderRadius: '8px', padding: '20px' }}>
        <h2>Hotwife / Cuckold Adventures</h2>
        <p>Where boundaries stretch and couples explore power exchange, trust, and thrilling public secrets.</p>
        <p><em>Launching soon — stay tuned!</em></p>
      </div>

      {/* Experience Block 2 */}
      <div style={{ marginBottom: '30px', border: '1px solid #d4af37', borderRadius: '8px', padding: '20px' }}>
        <h2>Colorblind Love Encounters 🌈</h2>
        <p>Experience an inclusive, open-hearted journey where love transcends traditional lines and celebrates diversity.</p>
        <p><em>Launching soon — stay tuned!</em></p>
      </div>

      {/* Experience Block 3 */}
      <div style={{ marginBottom: '30px', border: '1px solid #d4af37', borderRadius: '8px', padding: '20px' }}>
        <h2>Exhibitionist & Voyeur Playground</h2>
        <p>For those who crave the gaze, the thrill, the tease. See and be seen in a world of sensual exploration.</p>
        <p><em>Launching soon — stay tuned!</em></p>
      </div>

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <Link to="/">
          <button style={{ padding: '12px 25px', fontSize: '1rem', backgroundColor: '#4b0082', color: 'white', border: 'none', borderRadius: '20px', cursor: 'pointer' }}>
            Return to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ComingSoonPage;
