import React, { Component } from 'react';
import { Icon } from '@iconify/react';
import angularIcon from '@iconify/icons-logos/angular-icon';
import reactIcon from '@iconify/icons-logos/react';
import Contact from './Contact'; // Ensure this path is correct
import './About.css';

class About extends Component {
  render() {
    const { sharedBasicInfo, resumeBasicInfo } = this.props;
    const profilepic = sharedBasicInfo ? `images/${sharedBasicInfo.image}` : 'https://iconscout.com/illustrations/female-profile';
    const sectionName = resumeBasicInfo ? resumeBasicInfo.section_name.about : 'About Me';

    return (
      <section id="about">
        <div className="about-container">
          <h1 className="section-title">{sectionName}</h1>
          <div className="about-content">
            <div className="profile-section">
              <img className="profile-pic" src={profilepic} alt="Profile" />
              <div className="tech-icons">
                <Icon icon={angularIcon} className="tech-icon" />
                <Icon icon={reactIcon} className="tech-icon" />
              </div>
            </div>
            <Contact /> {/* Render the Contact component here */}
          </div>
        </div>
      </section>
    );
  }
}

export default About; // Ensure this line is present
