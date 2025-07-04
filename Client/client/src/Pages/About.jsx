// pages/About.jsx
import React, { useEffect } from 'react';
import './About.css';

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
          }
        });
      },
      { threshold: 0.1 }
    );

    const hidden = document.querySelectorAll('.about-section');
    hidden.forEach(el => observer.observe(el));

    return () => hidden.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <section className="about-section">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I'm a dedicated and curious web developer with hands-on experience in building projects using the MERN stack (MongoDB, Express.js, React.js, and Node.js).
          From developing interactive frontends to designing scalable backend APIs, I enjoy every part of the development process. I've worked on multiple MERN-based projects that reflect my ability to turn ideas into real applications.
          Currently, I'm focused on deepening my skills, contributing to meaningful tech solutions, and continuously learning new technologies to stay updated in this fast-evolving field.
          I strongly believe that consistency and passion are key to mastering anything — and I'm here to build, break, and learn every single day.
        </p>
        {/* <p>
          From frontend interactivity with React to backend logic with Node.js and MongoDB,
          I aim to deliver seamless digital experiences. Currently, I'm focused on creating impactful
          portfolio projects and contributing to open-source.
        </p> */}
      </div>
    </section>
  );
};

export default About;