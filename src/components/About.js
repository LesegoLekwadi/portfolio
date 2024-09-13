import React, { Component } from 'react';
import { Icon } from '@iconify/react';
import angularIcon from '@iconify/icons-logos/angular-icon';
import reactIcon from '@iconify/icons-logos/react';
import vueIcon from '@iconify/icons-logos/vue';
import './About.css'; // Import the CSS file

class About extends Component {
  render() {
    const { sharedBasicInfo, resumeBasicInfo } = this.props;

    const profilepic = sharedBasicInfo ? `images/${sharedBasicInfo.image}` : 'https://iconscout.com/illustrations/female-profile';
    const sectionName = resumeBasicInfo ? resumeBasicInfo.section_name.about : 'About Me';

    // Contact Information
    const contactInfo = {
      email: 'example@example.com',
      phone: '+1234567890',
      linkedin: 'https://www.linkedin.com/in/yourprofile',
      github: 'https://github.com/yourusername'
    };

    return (
      <section id="about">
        <div className="about-container">
          <h1 className="section-title">{sectionName}</h1>
          <div className="about-content">
            <div className="profile-section">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Profile"
              />
              <div className="tech-icons">
                <Icon icon={angularIcon} className="tech-icon" />
                <Icon icon={reactIcon} className="tech-icon" />
                
              </div>
            </div>
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
          </div>
        </div>
      </section>
    );
  }
}

export default About;
