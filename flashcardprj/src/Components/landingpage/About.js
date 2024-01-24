import React from "react";
import AboutBackground from "../Assets/about-background.png";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="about-primary-heading">
          FlashFocus is an intuitive and beginner-friendly flashcard
          productivity tool for studying designed to simplify the learning
          experience for users entering the world of online education.
        </h1>
      </div>
    </div>
  );
};

export default About;
