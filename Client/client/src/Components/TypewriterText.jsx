import React, { useEffect, useState } from 'react';
import './TypewriterText.css';

const texts = [
  'Frontend Developer',
  'MERN Stack Developer',
  'React Enthusiast',
  
];

const TypewriterText = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setText(currentText.substring(0, charIndex));
      if (!isDeleting && charIndex === currentText.length) {
        setIsDeleting(true);
        setTimeout(() => {}, 800);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      } else {
        setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  return (
    <h2 className="typewriter">
      {text}
      <span className="cursor">|</span>
    </h2>
  );
};

export default TypewriterText;
