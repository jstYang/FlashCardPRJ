import React from "react";
import Logo from "../Assets/logo.png";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },

    {
      text: "About",
      icon: <InfoIcon />,
    },

    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },

    {
      text: "Log in",
      icon: <CiLogin />,
    },
  ];
};
return (
  <nav>
    <div className="nav-logo-container">
      <img scr={Logo} alt="" />
    </div>
    <div className="navbar-links-container">
      <a href="">Home</a>
      <a href="">About</a>
      <a href="">Contact</a>
      <a href="">Log In</a>
      <button className="primary-button">Get started</button>
    </div>
    <div className="navbar-menu-container">
      <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
    </div>
  </nav>
);

export default Navbar;