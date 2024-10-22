import React, {useState} from 'react';
import { Modal, Button } from 'react-bootstrap';
// import HeroImage from '../assets/images/hero-image.png'
import './Hero.css'; // CSS for hero section
import MyPhoto from '../assets/images/my-photo.png';

function Hero() {
  
const [showModal, setShowModal] = useState(false);
const handleIconClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };


  return (
    <section className="hero-section">
        <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi! I'm Swetha Ragothaman</h1>
          <h2>UI/UX-Focused Front-End Developer</h2>
          <p>
          A versatile developer with strong technical expertise acquired through an intensive bootcamp and hands-on experience across various projects. Well-versed in Python, JavaScript, and SQL, with additional skills in wireframing and UI/UX design, focused on delivering responsive, visually appealing front-end solutions.
          </p>
          <div className="hero-image">
            <img src={MyPhoto} alt="My Icon" className="hero-photo-icon" onClick={handleIconClick} />
            <p className="click-me-text">Click me!</p>
        </div>

        {/* Modal for displaying text on icon click */}
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>About Me</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Hi! I'm Swetha, a passionate developer focused on delivering responsive and dynamic solutions using cutting-edge technologies. I love collaborating with teams to bring projects to life, and I'm always fascinated by the process of developing and creating new features for products. Having worked as a business developer for the past two years, I have honed strong interpersonal skills, excelling in client interactions, product demonstrations, and bridging the gap between business and technical teams. I bring solid technical expertise gained through comprehensive boot-camp learning and practical experience on diverse projects. I aim to combine my background in business development with my technical expertise to become a successful developer, leveraging both skill sets to create impactful and user-focused solutions.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
          {/* <button onClick={handleConnectClick} className="btn-connect">Let’s Connect</button> */}
        </div>
        {/* <div className="hero-image">
          <img src={HeroImage} alt="Hero illustration" />
        </div> */}
      </div>
    </section>
  );
}

export default Hero;
