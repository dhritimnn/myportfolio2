import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <h2>Dhritiman</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <button>
        <svg
          xmlns="http://w3.org"
          viewBox="0 0 200 200"
          stroke="#000000"
          stroke-width="24"
          stroke-linecap="round"
          width="25"
          height="19"
        >
          <line x1="10" y1="60" x2="190" y2="60" />
          <line x1="10" y1="115" x2="190" y2="115" />
          <line x1="10" y1="175" x2="190" y2="175" />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
