import { Link } from "react-router-dom"; 
import { useState } from "react"; 
import "./Navbar.css"; 
import NavMenu from "./Navmenu"; 

function Navbar() {   
  const [isOpen, setIsOpen] = useState(false);   

  return (     
    <>       
      <div className="Navbar">         
        <h2>Dhritiman</h2>         
        <div className="Nav-links">           
          <Link to="/">Home</Link>           
          <Link to="/about">About</Link>           
          <Link to="/blogs">Blogs</Link>         
        </div>         
        <button className="Nav-listbtn" onClick={() => setIsOpen(!isOpen)}>           
          <svg             
            width="20"             
            height="20"             
            fill="currentColor"             
            className="bi bi-list"             
            viewBox="0 0 16 16"             
          >             
            <rect x="2.5" y="3" width="11" height="1" rx="0.5" />             
            <rect x="2.5" y="7" width="11" height="1" rx="0.5" />             
            <rect x="2.5" y="11" width="11" height="1" rx="0.5" />           
          </svg>         
        </button>       
      </div>       
      <NavMenu ds={isOpen ? "flex" : "none"} />     
    </>   
  ); 
}  

export default Navbar;
