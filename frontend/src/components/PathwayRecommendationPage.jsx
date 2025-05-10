import React from 'react';
import { Link } from 'react-router-dom';

function PathwayRecommendationPage() {
  const pathways = [
    {
      title: 'Her Court 👑',
      description:
        'Elegance, seduction, and sensual mastery. For submissives drawn to the power of the Queen, this exclusive realm is where obedience is art.',
      image: 'https://via.placeholder.com/200x300?text=Her+Court',
      link: '/submission-intake',
    },
    {
      title: 'Hotwife & Cuckold 🔥',
      description:
        'For those captivated by the allure of watching and waiting, this path teases boundaries and elevates anticipation to its peak.',
      image: 'https://via.placeholder.com/200x300?text=Hotwife+Cuckold',
      link: '/coming-soon', // We can define later
    },
    {
      title: 'Colorblind Love 🌈',
      description:
        'A celebration of connection without barriers. Explore interracial desires in a respectful, daring, and consensual space.',
      image: 'https://via.placeholder.com/200x300?text=Colorblind+Love',
      link: '/coming-soon', // We can define later
    },
    {
      title: 'Group Play & Voyeurism 🎭',
      description:
        'Enter a world where many watch, many join, and many dare. This is the path for those who crave variety and spectacle.',
      image: 'https://via.placeholder.com/200x300?text=Group+Voyeur',
      link: '/coming-soon', // We can define later
    },
    {
      title: 'Erotic AI Companion 🤖',
      description:
        'Not ready for Dom/sub or live experiences? Build an intimate bond with your personal AI companion designed just for you.',
      image: 'https://via.placeholder.com/200x300?text=AI+Companion',
      link: '/coming-soon', // We can define later
    },
  ];

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>Your Perfect Path Awaits</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '30px' }}>
        Based on your desires, we recommend a tailored experience. You may also explore other available journeys within <strong>The Real Privilege</strong>.
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {pathways.map((path) => (
          <div
            key={path.title}
            style={{
              width: '220px',
              backgroundColor: '#1a1a1a',
              padding: '15px',
              borderRadius: '12px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.4)',
              textAlign: 'center',
            }}
          >
            <img
              src={path.image}
              alt={path.title}
              style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }}
            />
            <h2 style={{ fontSize: '1.2rem', marginBottom: '10px', color: '#d4af37' }}>{path.title}</h2>
            <p style={{ fontSize: '0.95rem', marginBottom: '15px', color: '#f5f5f5' }}>{path.description}</p>
            <Link to={path.link}>
              <button
                style={{
                  padding: '8px 16px',
                  fontSize: '0.9rem',
                  backgroundColor: '#b30000',
                  color: 'white',
                  border: 'none',
                  borderRadius: '20px',
                  cursor: 'pointer',
                }}
              >
                Explore
              </button>
            </Link>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '40px' }}>
        <p style={{ fontSize: '0.9rem' }}>
          Want to adjust your preferences? <Link to="/general-intake">Go back</Link> to refine your answers.
        </p>
      </div>
    </div>
  );
}

export default PathwayRecommendationPage;
