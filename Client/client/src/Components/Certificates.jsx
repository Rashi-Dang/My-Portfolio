import React from 'react';
import './Certificates.css';
import cert1 from '../assets/cybersecurity-certificate.jpg';
import cert2 from '../assets/java-certificate.jpg';
import cert3 from '../assets/Machine-learning-certificate.jpg';
import cert4 from '../assets/ui-ux-design-using-ai-certificate.jpg';
import cert5 from '../assets/ai-certificate.jpg';
import cert6 from '../assets/Deloitte-CyberJobSimulation.jpg';

const certificateData = [
   {
    title: 'Cyber Job Simulation',
    org: 'Deloitte',
    image: cert6
  },
  {
    title: 'Introduction to Cybersecurity',
    org: 'Cisco Networking Academy',
    image: cert1
  },
  {
    title: 'Full Stack Development',
    org: 'Creative Developers',
    image: cert2
  },
  {
    title: 'Introduction to Machine Learning',
    org: 'SkillEcted',
    image: cert3
  },
  {
    title: 'Website UI/UX Designing using ChatGPT',
    org: 'Simplilearn',
    image: cert4,
  },
  {
    title: 'Generative AI',
    org: 'DUCAT',
    image: cert5
  },
  // Add more certificates here (total 7-8 as you have)
];

const Certificates = () => {
  return (
    <section className="certificates-section">
      <h3 className="certificates-title">My Certifications <span role="img" aria-label="certificate">📜</span></h3>
      <p className="certificates-subtext">Courses and workshops I’ve successfully completed</p>

      <div className="certificates-grid">
        {certificateData.map((cert, index) => (
          <div className="certificate-card" key={index}>
            <img src={cert.image} alt={cert.title} className="certificate-image" />
            <h4 className="certificate-title">{cert.title}</h4>
            <p className="certificate-org">{cert.org}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;