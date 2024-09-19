import React from 'react';
import ReactTyped from 'react-typed'; // Make sure this import is correct

import About from './components/About'; 
import './App.css'; 
import Experience from './components/Experience';
import Project from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
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
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">Hello, I am Lesego Lekwadi</h1>
              <p className="intro-subtitle">
                <strong className="text-slider">
                  <ReactTyped
                    strings={[
                      "Front End Developer",
                      "Back End Developer",
                      "Software Engineer"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <button
                className="btn btn-primary btn js-scroll px-4"
                onClick={() => {
                  document.getElementById('work').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View My Work
              </button>

              <button
                className="btn btn-secondary btn js-scroll px-4"
                onClick={() => {
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <About
        sharedBasicInfo={sharedBasicInfo}
        resumeBasicInfo={resumeBasicInfo}
      />
      <Experience />
      <Project />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
