import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import HtmlIcon from '../assets/images/html.png';
import CssIcon from '../assets/images/css.png';
import PythonIcon from '../assets/images/python.png'; 
import JavaScriptIcon from '../assets/images/javascript.png';
import SQlIcon from '../assets/images/sql.png'; 
import BootstrapIcon from '../assets/images/bootstrap.png'; 
import EmailCampaignIcon from '../assets/images/email-campaign.png'; 
import ErdIcon from '../assets/images/erd.png'; 
import FrontEndIcon from '../assets/images/front-end.png'; 
import RefManagementIcon from '../assets/images/referral-management.png'; 
import ReqGatheringIcon from '../assets/images/requirement-gathering.png'; 
import UseCaseIcon from '../assets/images/use-case.png'; 
import WireframingIcon from '../assets/images/wireframing.png'; 


import './Skills.css';

function Skills() {
    const skills = [
    { name: 'Python', icon: PythonIcon },
    { name: 'SQL', icon: SQlIcon },
    { name: 'JavaScript', icon: JavaScriptIcon },
    { name: 'HTML', icon: HtmlIcon },
    { name: 'CSS', icon: CssIcon },
    { name: 'Bootstrap', icon: BootstrapIcon },
    { name: 'Email Campaign', icon: EmailCampaignIcon },
    { name: 'Entity-Relationship-Diagram', icon: ErdIcon },
    { name: 'Front-end Designing', icon: FrontEndIcon },
    { name: 'Healthcare Referral Management', icon: RefManagementIcon },
    { name: 'Requirement Gathering', icon: ReqGatheringIcon },
    { name: 'Use Case', icon: UseCaseIcon },
    { name: 'Wire-framing', icon: WireframingIcon }

  ];

  const settings = {
    dots: true,               // Dots for navigation below the slider
    infinite: true,           // Looping through the items
    speed: 500,
    slidesToShow: 3,          // Show 3 icons at once
    arrows: true,
    slidesToScroll: 2,        // Scroll 1 item at a time
    nextArrow: <NextArrow />, // Custom next arrow
    prevArrow: <PrevArrow />, // Custom prev arrow
  };

  return (
    <div className="skills-section">
      <h2>Skills</h2>
      <p>
        Skilled in various programming languages with a focus on front-end, UI and back-end development.
      </p>
      <Slider {...settings}>
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <p>{skill.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="custom-arrow next" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronRight} className="arrow-icon" /> {/* FontAwesome or custom icon */}
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronLeft} className="arrow-icon" /> {/* FontAwesome or custom icon */}
    </div>
  );
}

export default Skills;