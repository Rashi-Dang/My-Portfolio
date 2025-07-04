// components/CTA.jsx
import React, { useEffect } from 'react';
import './CTA.css';

const CTA = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-up');
        }
      });
    }, { threshold: 0.3 });

    const section = document.querySelector('.cta-banner');
    if (section) observer.observe(section);
    return () => section && observer.unobserve(section);
  }, []);

  return (
    <section className="cta-banner">
      <h2>Let’s Build Something Amazing!</h2>
      <p>I’m open to freelance projects, collaborations, and internships.</p>
      <div className="cta-buttons">
        <a href="/contact" className="btn primary">Let's Work Together</a>
        <a href="/projects" className="btn secondary">See My Work</a>
      </div>
    </section>
  );
};

export default CTA;
