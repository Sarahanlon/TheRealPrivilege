import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function GeneralIntakePage() {
  const [formData, setFormData] = useState({
    selfDescription: [],
    relationshipStatus: '',
    gender: '',
    ageRange: '',
    timeZone: '',
    username: '',
    sceneName: '',
    emailOptIn: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox' && name === 'selfDescription') {
      setFormData((prev) =>
        checked
          ? { ...prev, selfDescription: [...prev.selfDescription, value] }
          : {
              ...prev,
              selfDescription: prev.selfDescription.filter((item) => item !== value),
            }
      );
    } else if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add API POST request here later
  };

  return (
    <div
      className="general-intake-page"
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'left',
        padding: '40px 20px',
        lineHeight: '1.6',
      }}
    >
      <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>
        Begin Your Private Journey
      </h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '30px' }}>
        Let’s get to know you a little better to ensure <strong>The Real Privilege</strong> is your perfect fit.
        This quick step will help us recommend your ideal path.
      </p>

      <form onSubmit={handleSubmit}>
        {/* 1️⃣ How Do You Describe Yourself */}
        <div className="form-block" style={{ marginBottom: '25px' }}>
          <h2>🖤 How Do You Describe Yourself?</h2>
          <p>Select all that apply-you can explore more than one path here.</p>
          {[
            'Dominant/submissive (D/s lifestyle)',
            'Swinger / open relationship',
            'Group play enthusiast',
            'Exhibitionist / Voyeur',
            'Hotwife / cuckold / stag & vixen',
            'Colorblind love explorer 🌈',
            'Casual kink / Curious but new',
            'Erotic companion seeker (AI-only)',
            'Fetishist (feet, leather, latex, etc.)',
            'Vanilla but exploring',
            'Other (please specify)',
            'Unsure',
          ].map((option) => (
            <div key={option} style={{ margin: '5px 0' }}>
              <label>
                <input
                  type="checkbox"
                  name="selfDescription"
                  value={option}
                  checked={formData.selfDescription.includes(option)}
                  onChange={handleChange}
                />{' '}
                {option}
              </label>
            </div>
          ))}
        </div>

        {/* 2️⃣ Relationship Status */}
        <div className="form-block" style={{ marginBottom: '25px' }}>
          <h2>Relationship Status (Optional)</h2>
          {['Single', 'Partnered', 'Married', 'Poly / ENM', 'Other', 'Unsure'].map((option) => (
            <div key={option} style={{ margin: '5px 0' }}>
              <label>
                <input
                  type="radio"
                  name="relationshipStatus"
                  value={option}
                  checked={formData.relationshipStatus === option}
                  onChange={handleChange}
                />{' '}
                {option}
              </label>
            </div>
          ))}
        </div>

        {/* 3️⃣ Gender */}
        <div className="form-block" style={{ marginBottom: '25px' }}>
          <h2>Your Gender</h2>
          {['Male', 'Female', 'Nonbinary', 'Transgender – MtF', 'Transgender – FtM', 'Other'].map((option) => (
            <div key={option} style={{ margin: '5px 0' }}>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value={option}
                  checked={formData.gender === option}
                  onChange={handleChange}
                  required
                />{' '}
                {option}
              </label>
            </div>
          ))}
        </div>

        {/* 4️⃣ Age Range */}
        <div className="form-block" style={{ marginBottom: '25px' }}>
          <h2>Your Age Range</h2>
          {['18–24', '25–34', '35–44', '45–54', '55–64', '65–74', '75+'].map((option) => (
            <div key={option} style={{ margin: '5px 0' }}>
              <label>
                <input
                  type="radio"
                  name="ageRange"
                  value={option}
                  checked={formData.ageRange === option}
                  onChange={handleChange}
                  required
                />{' '}
                {option}
              </label>
            </div>
          ))}
        </div>

        {/* 5️⃣ Time Zone */}
        <div className="form-block" style={{ marginBottom: '25px' }}>
          <h2>Your Time Zone</h2>
          <input
            type="text"
            name="timeZone"
            placeholder="e.g., EST, PST, GMT+1"
            value={formData.timeZone}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        {/* 6️⃣ Username */}
        <div className="form-block" style={{ marginBottom: '25px' }}>
          <h2>Username</h2>
          <p>Choose a unique username for your profile.</p>
          <input
            type="text"
            name="username"
            placeholder="e.g., Adam_1978"
            value={formData.username}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        {/* 7️⃣ Scene Name */}
        <div className="form-block" style={{ marginBottom: '25px' }}>
          <h2>Scene Name (What Should We Call You?)</h2>
          <input
            type="text"
            name="sceneName"
            placeholder="e.g., Adam or Petboy"
            value={formData.sceneName}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        {/* 8️⃣ Email Opt-In */}
        <div className="form-block" style={{ marginBottom: '30px' }}>
          <label>
            <input
              type="checkbox"
              name="emailOptIn"
              checked={formData.emailOptIn}
              onChange={handleChange}
            />{' '}
            Yes, please sign me up for exclusive updates and offers.
          </label>
          <p style={{ fontSize: '0.85rem', color: '#555' }}>
            We respect your privacy. You can unsubscribe anytime.
          </p>
        </div>
      </form>

      {/* Proceed Button (navigation) */}
      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <p>Ready to see your personalized experience?</p>
        <Link to="/pathway-recommendation">
          <button style={{ padding: '12px 25px', fontSize: '1rem' }}>
            Show Me My Path
          </button>
        </Link>
      </div>
    </div>
  );
}

export default GeneralIntakePage;
