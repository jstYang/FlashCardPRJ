import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

function Landingpage() {
  return (
    <div className="App">
      <Home />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default Landingpage;
