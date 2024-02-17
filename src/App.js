import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import background from './images/background.jpg';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';

function App() {
  // Inline style for the background image
  const appStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    overflow: 'hidden',
    minHeight: '100vh',
  };

  return (
    <div className="App" style={appStyle}>
      <NavBar />
      
      {/* Wrap Banner in a section with id "home" */}
      <section id="home">
        <Banner />
      </section>

      {/* Wrap Skills in a section with id "skills" */}
      <section id="skills">
        <Skills />
      </section>

       {/* Wrap Skills in a section with id "skills" */}
       <section id="projects">
        <Projects />
      </section>


      {/* Continue with the rest of your sections... */}
    </div>
  );
}

export default App;
