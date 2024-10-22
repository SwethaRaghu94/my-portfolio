import React, { useState, useEffect} from 'react';
import LinkedInLogo from '../assets/images/linkedinlogo.png';
import GitHubIcon from '../assets/images/githubicon.png';
import { Modal, Button } from 'react-bootstrap';
import './Navbar.css';  // Import the CSS file

// Regular function declaration
function Navbar() {
    const [navBackground, setNavBackground] = useState('transparent'); // Default to transparent
    const [showModal, setShowModal] = useState(false);

    const handleScroll = () => {
        const homeSection = document.getElementById('home'); // Target the div containing the Hero section
        const homeHeight = homeSection.offsetHeight;  
        const scrollY = window.scrollY;
      if (scrollY > homeHeight * 0.8) { // You can adjust this threshold
        setNavBackground('white');
      } else {
        setNavBackground('transparent');
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

     // Function to handle smooth scrolling to sections
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
 
  // Function to show modal for "Let's Connect"
  const handleConnectClick = () => {
    setShowModal(true); // Show modal when "Let's Connect" is clicked
  };

  const handleClose = () => {
    setShowModal(false); // Close modal
  };
    
  return (
    <nav className={`navbar ${navBackground === 'transparent' ? 'transparent' : 'white'}`}>
      {/* <div className="navbar-logo"> */}
        {/* <img src="logo.png" alt="Logo" /> */}
      {/* </div> */}
      <ul className="navbar-links">
        <li>
          <a href="#home" onClick={() => handleScrollToSection('home')}>Home</a>
        </li>
        <li>
          <a href="#skills" onClick={() => handleScrollToSection('skills')}>Skills</a>
        </li>
        <li>
          <a href="#projects" onClick={() => handleScrollToSection('projects')}>Projects</a>
        </li>
        <li>
            <a href="Swetha_UIUX_FrontEnd.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        </li>
      </ul>
      <div className="navbar-icons">
        <a href="https://www.linkedin.com/in/swetha-ragothaman" target="_blank" rel="noopener noreferrer">
          <img src={LinkedInLogo} alt="LinkedIn" className="icon-img" />
        </a>
        <a href="https://github.com/SwethaRaghu94" target="_blank" rel="noopener noreferrer">
          <img src={GitHubIcon} alt="GitHub" className="icon-img" />
        </a>
        <button onClick={handleConnectClick} className="btn-connect">Let’s Connect</button>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Let's Connect</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You can reach me at: <strong>swetha.rago@gmail.com</strong>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


    </nav>
  );
}

export default Navbar;