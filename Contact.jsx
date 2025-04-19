//import React from 'react';
import './Contact.css';
import './PageAnimations.css';
function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>Email: <a href="mailto:yamunadevikamaraj65@gmail.com">yamunadevikamaraj65@gmail.com</a></p>
      <p>Phone: +91 93444 92832</p>
      <p>Location: Mettupalayam, Coimbatore, Tamil Nadu</p>
      <div className="social-links">
        <a href="https://github.com/YamunadeviK" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.hackerrank.com/yamunadevik" target="_blank" rel="noopener noreferrer">HackerRank</a>
        <a href="https://www.codechef.com/users/yamunadevi07" target="_blank" rel="noopener noreferrer">CodeChef</a>
        <a href="https://trailblazer.me/id/yamunadevik" target="_blank" rel="noopener noreferrer">Salesforce</a>
      </div>
    </section>
  );
}

export default Contact;
