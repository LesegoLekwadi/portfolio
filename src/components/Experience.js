import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import experienceIcon from '@iconify/icons-logos/react'; // Example icon
import './Experience.css'; // Import the CSS file

// Sample data for experiences
const experiences = [
  {
    title: "Full-Stack",
    company: "Shaper",
    duration: "2024",
    description: "Developing and maintaining web applications using modern technologies.",
    icon: experienceIcon,
  },
  {
    title: "Frontend Developer",
    company: "Another Tech Company",
    duration: "Jun 2020 - Dec 2021",
    description: "Worked on building responsive and user-friendly interfaces.",
    icon: experienceIcon,
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <Icon icon={exp.icon} className="experience-icon" />
            <div>
              <h3>{exp.title}</h3>
              <p><strong>{exp.company}</strong></p>
              <p>{exp.duration}</p>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

Experience.propTypes = {
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.object.isRequired,
    })
  ),
};

export default Experience;
