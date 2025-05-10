import React from 'react';

function SubmissionIntakePage() {
  return (
    <div className="intake-form-page">
      <h1>Begin Your Journey of Submission</h1>
      <p>Take your time to answer truthfully. The Queen’s gaze is discerning—and your answers shape your fate.</p>

      {/* Section 1: Orientation & Relationship */}
      <section>
        <h2>1️⃣ Orientation & Relationship Status</h2>
        <select>
          <option value="">Select Orientation</option>
          <option value="straight">Straight</option>
          <option value="gay">Gay</option>
          <option value="bi">Bisexual</option>
          <option value="other">Other</option>
        </select>
        <br />
        <select>
          <option value="">Select Relationship Status</option>
          <option value="single">Single</option>
          <option value="partnered">Partnered</option>
          <option value="married">Married</option>
          <option value="other">Other</option>
        </select>
      </section>

      {/* Section 2: Role Identity */}
      <section>
        <h2>2️⃣ Role Identity</h2>
        <label><input type="checkbox" /> Submissive Male</label><br />
        <label><input type="checkbox" /> Sissy</label><br />
        <label><input type="checkbox" /> Slave</label><br />
        <label><input type="checkbox" /> Pain Lover</label><br />
        <label><input type="checkbox" /> Other</label>
      </section>

      {/* Section 3: Limits & Thresholds */}
      <section>
        <h2>3️⃣ Limits & Thresholds</h2>
        <label><input type="checkbox" /> Restraints</label><br />
        <label><input type="checkbox" /> Pain</label><br />
        <label><input type="checkbox" /> Humiliation</label><br />
        <label><input type="checkbox" /> Financial Domination</label><br />
        <label><input type="checkbox" /> Other</label>
      </section>

      {/* Section 4: Describe a Scene */}
      <section>
        <h2>4️⃣ Tell Me a Scene You Crave</h2>
        <textarea
          rows="5"
          cols="50"
          placeholder="Describe your most tempting scene..."
        ></textarea>
        <p><em>You may earn points if you later tribute this as an audio offering to the Queen 👑.</em></p>
      </section>

      {/* Section 5: Consent Confirmation */}
      <section>
        <h2>5️⃣ Consent & Confirmation</h2>
        <label>
          <input type="checkbox" required /> I consent to sharing this information. We will decide if you are worthy.
        </label>
      </section>

      {/* Submit Button */}
      <button type="submit">Submit & Await Your Match</button>
    </div>
  );
}

export default SubmissionIntakePage;

