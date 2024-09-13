import React from 'react';
import About from './components/About'; // Ensure this path matches your file structure
import './App.css'; // Your custom styles
import Experience from './components/Experience';
import Project from './components/Projects';

function App() {
  // Example data to be passed as props
  const sharedBasicInfo = {
    image: 'profile-pic.jpg', // Example image path
  };

  const resumeBasicInfo = {
    section_name: {
      about: 'About Me',
    },
    description_header: 'Hello!',
    description: 'I am a passionate software developer with experience in building modern web applications. My goal is to create innovative solutions that solve real-world problems. Explore my projects and experience to see how I can contribute to your next project.',
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Portfolio</h1>
        <p>Hi, I’m Lesego , a skilled software developer with expertise in cutting-edge technologies. Take a look around to see my work, skills, and experience.</p>
        <button className="contact-button">Contact Me</button>
      </header>
      
      <Experience/>
      <Project/>
      <About
        sharedBasicInfo={sharedBasicInfo}
        resumeBasicInfo={resumeBasicInfo}
      />
    </div>
  );
}

export default App;
