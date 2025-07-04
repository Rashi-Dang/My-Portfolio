import React, { useEffect } from 'react';
import './Skills.css';

const SkillsPreview = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, { threshold: 0.2 });

    const section = document.querySelector('.skills-preview');
    if (section) observer.observe(section);
    return () => section && observer.unobserve(section);
  }, []);

  return (
    <section className="skills-preview">
  <div className="skills-container">
    <h2 className="skills-heading">Skills & Tools</h2>
    <p className="skills-subheading">Technologies I work with regularly</p>
    
    <div className="skills-grid">
      <span>HTML</span>
      <span>CSS</span>
      <span>JavaScript</span>
      <span>React.js</span>
      <span>Tailwind CSS</span>
      <span>Bootstrap</span>
      <span>Node.js</span>
      <span>MongoDB</span>
      <span>MS Office</span>
      <span>Git & GitHub</span>
    </div>
  </div>
</section>

  );
};

export default SkillsPreview;