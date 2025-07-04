// pages/Home.jsx
import React, { useEffect } from 'react';
import './Home.css';
import techImage from '../assets/techImage.jpeg';
import Skills from '../Components/Skills';
import CTA from '../Components/CTA';
import Certificates from '../Components/Certificates';
import VirtualExperience from '../Components/VirtualExperience';
import TypewriterText from '../Components/TypewriterText';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.2 }
    );

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(el => observer.observe(el));

    return () => {
      hiddenElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <>
    <div className="home hidden">
      <div className="home-left">
        <h1>Hi, I'm Rashi</h1>
        {/* <h2>MERN Stack Developer 💻</h2> */}
        <TypewriterText/>
        <p>
          I design and develop responsive websites with clean UI/UX using the MERN stack.
        </p>
        <div className="home-buttons">
          {/* <a href="/projects" className="btn primary">View Projects</a>
          <a href="/contact" className="btn secondary">Contact Me</a> */}
           <Link to="/projects" className="btn primary">View Projects</Link>
           <Link to="/contact" className="btn secondary">Contact Me</Link>
        </div>
      </div>
      <div className="home-right">
        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJyZ9G1imgpNaCKONdlfqwfjDP6jbkIAq1gJzy_bD9xjnARpUtjij2c6qcX-V9g7c5UO8&usqp=CAU" alt="" /> */}
        <img src={techImage} alt="Tech Illustration" className="tech-img" />
      </div>
    </div>

<Skills/>
{/* <TechStack/> */}
<CTA/>
<Certificates/>
<VirtualExperience/>
    </>
  );
};

export default Home;