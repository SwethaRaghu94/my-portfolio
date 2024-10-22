import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';  
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;