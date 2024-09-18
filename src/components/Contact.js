import React from 'react';
import './Contact.css';

const Contact = () => {
  const contactInfo = {
    email: 'example@example.com',
    phone: '+1234567890',
    linkedin: 'https://www.linkedin.com/in/yourprofile',
    github: 'https://github.com/yourusername',
  };

  return (
    <div className="contact-section">
      <h2>Contact Me</h2>
      <p>If you'd like to get in touch, feel free to reach out via email or connect with me on LinkedIn or GitHub.</p>
      <ul className="contact-list">
        <li>Email: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></li>
        <li>Phone: <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a></li>
        <li>LinkedIn: <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">{contactInfo.linkedin}</a></li>
        <li>GitHub: <a href={contactInfo.github} target="_blank" rel="noopener noreferrer">{contactInfo.github}</a></li>
      </ul>
    </div>
  );
};

export default Contact; // Ensure this line is present
