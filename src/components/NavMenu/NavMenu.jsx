import React from "react";
import "./NavMenu.css";
import { Link } from "react-router-dom";

const NavMenu = (props) => {
  return (
    <div className={`nav-menu ${props.visibility}`}>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div>
        <Link to="/">Blogs</Link>
        <Link to="/about">Feedback</Link>
        <Link to="/contact">Explore</Link>
      </div>
      <div className="nav-menu-long">
        <Link to="/contact">Explore</Link>
      </div>
    </div>
  );
};

export default NavMenu;
