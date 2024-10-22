import React, { useState } from 'react';
import connectionsOne from '../assets/images/connections-one.png';
import connectionsTwo from '../assets/images/connections-two.png';
import connectionsThree from '../assets/images/connections-three.png';
import weatherOne from '../assets/images/weather-one.png';
import weatherTwo from '../assets/images/weather-two.png';
import weatherThree from '../assets/images/weather-three.png';
import counterTwo from '../assets/images/counter-two.png';
import counterOne from '../assets/images/counter-one.png';
import weatherApiOne from '../assets/images/weather-api-one.png';
import weatherApiTwo from '../assets/images/weather-api-two.png';
import ecommerceOne from '../assets/images/ecommerce-one.png';
import ecommerceTwo from '../assets/images/ecommerce-two.png';
import onlineOne from '../assets/images/online-one.png';
import onlineTwo from '../assets/images/online-two.png';
import onlineThree from '../assets/images/online-three.png';
import onlineFour from '../assets/images/online-four.png';
import onlineFive from '../assets/images/online-five.png';
import onlineSix from '../assets/images/online-six.png';
import studentOne from '../assets/images/student-one.png';
import studentTwo from '../assets/images/student-two.png';
import studentThree from '../assets/images/student-three.png';
import studentFour from '../assets/images/student-four.png';
import studentFive from '../assets/images/student-five.png';
import recipesOne from '../assets/images/recipes-one.png';
import recipesTwo from '../assets/images/recipes-two.png';
import recipesThree from '../assets/images/recipes-three.png';
import recipesFour from '../assets/images/recipes-four.png';
import recipesFive from '../assets/images/recipes-five.png';
import recipesSix from '../assets/images/recipes-six.png';
import recipesSeven from '../assets/images/recipes-seven.png';
import recipesEight from '../assets/images/recipes-eight.png';
import recipesNine from '../assets/images/recipes-nine.png';
import referralOne from '../assets/images/referral-one.png';
import referralTwo from '../assets/images/referral-two.png';
import referralThree from '../assets/images/referral-three.png';
import referralFour from '../assets/images/referral-four.png';
import referralFive from '../assets/images/referral-five.png';
import referralSix from '../assets/images/referral-six.png';
import referralSeven from '../assets/images/referral-seven.png';
import referralEight from '../assets/images/referral-eight.png';
import referralNine from '../assets/images/referral-nine.png';
import referralTen from '../assets/images/referral-ten.png';
import referralWireframe from '../assets/images/referral-wireframe.png';
import blogsOne from '../assets/images/blogs-one.png';
import blogsTwo from '../assets/images/blogs-two.png';
import blogsThree from '../assets/images/blogs-three.png';
import blogsFour from '../assets/images/blogs-four.png';
import blogsFive from '../assets/images/blogs-five.png';
import blogsSix from '../assets/images/blogs-six.png';
import blogsSeven from '../assets/images/blogs-seven.png';
import blogsEight from '../assets/images/blogs-eight.png';
import blogsWireframe from '../assets/images/blogs-wirefarme.png';









import './Projects.css'; // Add your custom styles

function Projects() {
  // State to track which project is selected
  const [selectedProject, setSelectedProject] = useState('Connections');

  // Data for the projects
  const projectData = {

   Connections: {
      title: 'Connections',
      description: 'A social media platform mockup built with HTML, CSS, and JavaScript. It includes features to manage connection requests where users can accept or deny requests, with dynamic updates reflecting in the Your Connections count upon each new connection.',
      images: [connectionsOne, connectionsTwo, connectionsThree],
    },

    Counter: {
      title: 'Counter',
      description: 'A basic social media feed mockup where users can like posts. Each time the Like button is clicked, the like count for that specific post dynamically increases, showcasing real-time feedback functionality',
      images: [ counterOne, counterTwo],
    },
    
   Weather: {
      title: 'Weather',
      description: 'This weather website mockup provides users with a functional interface to toggle temperature units and displays detailed daily forecasts, alongside a cookie consent mechanism to adhere to privacy laws.',
      images: [weatherOne, weatherTwo, weatherThree],
    },
    
    WeatherAPI: {
        title: 'WeatherAPI',
        description: 'This is a React-based weather application that uses Axios to connect to a real-time weather data API. The app allows users to input either a city name or a ZIP code to retrieve the current weather information',
        images: [weatherApiOne, weatherApiTwo],
      },
    ECommerce: {
        title: 'ECommerce',
        description: 'This is a functional web page that simulates the features of a gaming e-commerce platform. The user can navigate through these banner images using the left and right chevron arrows. The number next to the shopping cart icon in the top-right corner increases with each purchase, indicating the number of items currently in the cart',
        images: [ecommerceOne, ecommerceTwo],
      },
    OnlineOrder: {
        title: 'OnlineOrder',
        description: 'This mockup demonstrates the essential features of a typical food-ordering website using React dynamic routing and component structure for a seamless, user-friendly experience',
        images: [onlineOne, onlineTwo, onlineThree, onlineFour, onlineFive, onlineSix],
      },
    Students: {
        title: 'Students',
        description: 'This project goes beyond being just a wire-frame and serves more as a functional prototype. By using Python, I have built logic to handle CRUD operations (Create, Read, Update, Delete) on the backend. The data entered in the form from front-end is connected to MySQL Workbench. This is far more than a static mockup or wire-frame. It represents a complete workflow connection front-end to back-end',
        images: [studentOne, studentTwo, studentThree, studentFour, studentFive],
      },
    Recipes: {
        title: 'Recipes',
        description: 'A functional prototype or a working mockup. Only registered and logged-in users have the ability to create, like, update, or delete recipes, ensuring that content is user-generated and secure. It functions more like a blog for food enthusiasts, providing a platform to share and discover various recipes',
        images: [recipesOne, recipesTwo, recipesThree, recipesFour, recipesFive, recipesSix, recipesSeven, recipesEight, recipesNine],
      },
    ReferralTracking:  {
        title: 'ReferralTracking',
        description: 'This mockup represents a Patient Care Management System built using a combination of front-end technologies and a Python back-end connected to an SQL database. The system allows care providers to log in, manage patient referrals, and engage in discussions about medical conditions. Once logged in, care providers can access patient records, monitor health data, and provide care remotely through telehealth or remote patient monitoring features. The system ensures secure registration and login for care providers, with a database storing all relevant information about patients and their healthcare needs..',
        images: [referralOne, referralTwo, referralThree, referralFour, referralFive, referralSix, referralSeven, referralEight, referralNine, referralTen, referralWireframe],
      },
    Blogs: {
        title: 'Blogs',
        description: 'This is a social media blogging platform mockup called SunnySide Stories, designed to allow users to create and share content across various categories such as fiction, art, culture, and more. The system requires users to register and log in before they can create blogs. Once logged in, users can select a category for their post and write about a subject of their choice. Similar to a blogging platform, it encourages the sharing of ideas and stories. The interface allows registered users to manage their blogs and engage with content across different topics.',
        images: [blogsOne, blogsTwo, blogsThree, blogsFour, blogsFive, blogsSix, blogsSeven, blogsEight, blogsWireframe],
      },
  };
  

  // Function to handle tab switching
  const handleTabClick = (projectName) => {
    setSelectedProject(projectName);
  };

  return (
    <div className="projects-section">
      <h2>Projects</h2>
      <p>
        My work showcases expertise in Python, Flask, JavaScript, React, SQL and Balsamiq wire-framing creating efficient solutions across both frontend and backend development, focusing on user-friendly design and optimizing system performance.
      </p>

      {/* Tab Navigation */}
      <div className="project-tabs">
        {Object.keys(projectData).map((projectName) => (
          <button
            key={projectName}
            className={selectedProject === projectName ? 'active' : ''}
            onClick={() => handleTabClick(projectName)}
          >
            {projectName}
          </button>
        ))}
      </div>

      {/* Display selected project content */}
      <div className="project-content">
        <h3>{projectData[selectedProject].title}</h3>
        <p>{projectData[selectedProject].description}</p>
        
        {/* Display images related to the selected project */}
        <div className="project-images">
          {projectData[selectedProject].images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${projectData[selectedProject].title} screenshot ${index + 1}`}
              className="project-image"
            />
          ))}
        </div>
        </div>
    </div>
  );
}

export default Projects;