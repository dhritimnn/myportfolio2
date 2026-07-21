import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import NavMenu from "../NavMenu/NavMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav>
        <h2>Dhritiman</h2>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <button onClick={toggleMenu}>
          <svg
            xmlns="http://w3.org"
            viewBox="0 0 200 200"
            stroke="#000000"
            strokeWidth="24"
            strokeLinecap="round"
            width="25"
            height="19"
          >
            <line x1="10" y1="60" x2="190" y2="60" />
            <line x1="10" y1="115" x2="190" y2="115" />
            <line x1="10" y1="175" x2="190" y2="175" />
          </svg>
        </button>
      </nav>
      <NavMenu visibility={isOpen ? "visible" : " "} />
    </>
  );
};

export default Navbar;
