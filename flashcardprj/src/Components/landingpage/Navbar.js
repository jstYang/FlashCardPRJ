import React, { useState } from "react";

const Navbar = () => {
  const [openMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
    },
    {
      text: "About",
    },
    {
      text: "Contact",
    },
  ];
  return (
    <nav>
      <div className="nav-logo-container"></div>
      <div className="navbar-links-container">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href=""></a>
      </div>
    </nav>
  );
};

export default Navbar;
