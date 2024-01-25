import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import AboutBackground from "../Assets/about-background.png";
import { Link } from "react-router-dom";
import { CgAdd } from "react-icons/cg";
import "./landingpage.css";




function Landingpage() {
  return (
    <div className="Grandmother">
    <div className="">
    <div className="">
          
      <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
             FlashFocus: Learn Faster <br/>Your Knowledge, Your Cards!
          </h1>
          
        </div>
      </div>
    </div>
      
      <div className="about-section-container">
        <div className="about-background-image-container">
          <img src={AboutBackground} alt="" />
        </div>
        <div className="about-section-text-container">
          <h1 className="about-primary-heading">
            FlashFocus is an intuitive and beginner-friendly flashcard
            productivity tool for studying designed to simplify the learning
            experience for users entering the world of online education.
              </h1>
              
      <Link to={"/main"} style={{ textDecoration: "none", color: "white" }}> <button className="secondary-button">
            Get Started <CgAdd style={{color: "blue"}} />{" "} </button></Link>
      
        </div>
        </div>
        </div>

      <div className="contact-page-wrapper">
        <h1 className="contact-primary-heading">Have Question In Mind?</h1>
        <h1 className="contact-primary-heading">Let Us Help You</h1>

        <div className="contact-form-container">
          <input type="text" placeholder="yourmail@gmail.com" />
          <button className="secondary-button">Submit</button>
        </div>
      </div>
    
        </div>
      
    
        
        <div className="footer-section">
          <p>Copyright &#169; 2024 FlashFocus. All Rights Reserved.</p>
        </div>
      </div>

   

  );
}

export default Landingpage;