import { Link } from "react-router-dom";
import "./NavMenu.css";

function NavMenu(prop) {
  return (
    <div className="NavMenu" style={{display: prop.ds}}>
      <div>
        <h2>one</h2>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div><hr />
      <div>
        <h2>two</h2>
        <Link to="/">A</Link>
        <Link to="/">A</Link>
        <Link to="/">A</Link>
      </div>
      </div>
  );
}

export default NavMenu;
