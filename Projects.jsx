//import React from 'react';
import './Projects.css';
import './PageAnimations.css';
function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>Image Generator</h3>
        <p>I developed a full-stack web platform inspired by sites like Unsplash, using the MERN stack (MongoDB, Express.js, React.js, Node.js). This platform allows artists to showcase their work and also includes AI integration, enabling users to generate and upload images through intelligent features. The goal was to enhance creativity and community engagement through technology-driven visual content sharing.</p>
      </div>
      <div className="project">
        <h3> Crowdfunding with Digital Marketing</h3>
        <p>This MERN-based crowdfunding platform empowers creators to raise funds effectively. I implemented features like project listings, investor dashboards, and integrated digital marketing tools including SEO optimization, email marketing, and social media sharing. A real-time analytics dashboard helps project owners monitor performance and refine their strategies to maximize engagement and funding success.</p>
      </div>
      <div className="project">
        <h3>Lifestyle Recommendation System</h3>
        <p>I created a mobile application that provides users with personalized lifestyle recommendations by analyzing their health data and habits. Using machine learning models like Logistic Regression and Random Forest, the app offers tailored suggestions for a healthier lifestyle. This project combined health tech innovation with practical machine learning applications, focusing on improving everyday wellness.</p>
      </div>
    </section>
  );
}

export default Projects;
