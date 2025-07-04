// pages/Resume.jsx
import React, { useEffect, useState } from 'react';
import './Resume.css';

const Resume = () => {
  const [resumeUrl, setResumeUrl] = useState('');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    // fetch existing resume
    const fetchResume = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/resume');
        const data = await res.json();
        if (data && data.resumeUrl) {
          setResumeUrl(data.resumeUrl);
        }
      } catch (err) {
        console.error('Resume fetch error:', err);
      }
    };

    fetchResume();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/resume', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resumeUrl })
      });

      if (res.ok) {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
      }
    } catch (err) {
      console.error('Resume update error:', err);
    }
  };

  return (
    <section className="resume-section">
      <h2>My Resume 📄</h2>
      <form onSubmit={handleSubmit} className="resume-form">
        <input
          type="text"
          placeholder="Enter resume URL (Google Drive, etc)"
          value={resumeUrl}
          onChange={e => setResumeUrl(e.target.value)}
          required
        />
        <button type="submit">Save Resume</button>
      </form>
      {saved && <p className="success-msg">Resume saved successfully!</p>}
      {resumeUrl && (
        <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="view-resume-btn">
          View My Resume
        </a>
      )}
    </section>
  );
};

export default Resume;
