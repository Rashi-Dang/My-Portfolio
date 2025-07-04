// pages/Contact.jsx
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', message: ''
  });

  const [success, setSuccess] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (err) {
      console.error('Contact Error:', err);
    }
  };

  return (
    <section className="contact-section">
      <h2>Contact Me 📬</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
        <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Your Email" required />
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required />
        <button type="submit">Send Message</button>
        {success && <p className="success-msg">Message sent successfully! ✅</p>}
      </form>
    </section>
  );
};

export default Contact;
