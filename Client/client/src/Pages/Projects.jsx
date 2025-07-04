// pages/Projects.jsx
import React, { useEffect, useState } from 'react';
import './Projects.css';

const sampleProjects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website built using Mern Stack and styled with modern CSS.',
    tech: ['React', 'CSS', 'Node.js', 'MongoDB', 'Express'],
    link: '#'
  },
  {
    title: 'Employee Management System',
    description: 'MERN-based CRUD and payroll system.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'CSS'],
    link: '#'
  },
  {
    title: 'Multi-Step Form Validation App',
    description: 'Its a form validation project with multisteps using react-hook-form.',
    tech: ['React', 'CSS'],
    link: 'https://multi-step-form-ecru-psi.vercel.app/'
  },
  {
    title: 'PDF Converter',
    description: ' A quick JS project to convert image into PDFs using jsPDF.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://pdf-converter-tool.vercel.app/'
  },
   {
    title: 'Chat App',
    description: 'A real-time chat application built with React, featuring user authentication, emojis etc,',
    //data firebase m store hora h shyd
    tech: ['React', 'CSS'],
    link:  'https://chat-app-sigma-mauve.vercel.app/'
  },
];

const Projects = () => {
  const [projects] = useState(sampleProjects);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-up');
        }
      });
    }, { threshold: 0.1 });

    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => observer.observe(card));
    return () => cards.forEach(card => observer.unobserve(card));
  }, []);

  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-list">
              {project.tech.map((t, i) => <span key={i}>{t}</span>)}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn primary">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;