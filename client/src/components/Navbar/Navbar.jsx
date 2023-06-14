import React from "react";
import { logo, logo1 } from "../../assets";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="left">
        <Link style={{ textDecoration: 'none' }}>
          <img src={logo1} alt="LOGO" />
        </Link>
      </div>
      <div className="right">
        <span>Home</span>
        <span>
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Suggestion</Link>
        </span>
        <span>About</span>
        <span>Contact</span>
      </div>
    </nav>
  );
};

export default Navbar;
