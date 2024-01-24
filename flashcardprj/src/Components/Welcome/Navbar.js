import React, { useState } from "react";
import Logo from "../Assets/logo.png";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
    },
    {
      text: "About",
    },
    {
      text: "Sign Up",
    },
    {
      text: "Log in",
    },
    {
      text: "Contact",
    },
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Sign in</a>
        <a href="">Contact</a>
        <a href=""></a>
        <button className="primary-button">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
