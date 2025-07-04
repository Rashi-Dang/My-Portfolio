import React, { useEffect } from 'react';
import './VirtualExperience.css';

const VirtualExperience = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
        }
      });
    }, { threshold: 0.3 });

    const section = document.querySelector('.virtual-experience');
    if (section) observer.observe(section);

    return () => section && observer.unobserve(section);
  }, []);

  return (
    <section className="virtual-experience">
      <h2>🎓 Virtual Internships & Simulation</h2>
      <div className="experience-card">
        <h4>Deloitte Australia Cyber Job Simulation</h4>
        <p className="platform"><strong>Platform:</strong> Forage</p>
        <p className="date"><strong>Date:</strong> 30 June 2025</p>
        <ul>
          <li>Completed a job simulation involving reading web activity logs.</li>
          <li>Supported a client in a cyber security breach.</li>
          <li>Answered questions to identify suspicious user activity.</li>
        </ul>
      </div>
    </section>
  );
};

export default VirtualExperience;
