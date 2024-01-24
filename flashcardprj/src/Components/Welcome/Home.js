import React from "react";
import Navbar from "./Navbar";
import BannerBackground from "../Assets/home-banner-background.png";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            FlashFocus, Flash Forward, Learn Faster: Your Knowledge, Your Cards!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
