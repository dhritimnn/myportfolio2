import "./Header.css";
function Header(prop) {
  return (
    <div className="Header">
      <img src="/img/profile.jpg" />
      <div>
        <div style={{height: "1rem"}}></div>
        <h2>Dhritman Kashyap</h2>
        <span style={{color: "rgb(209, 163, 237)"}}>Student At ARBA</span>
        <br />
        <p></p>
      </div>
    </div>
  );
}

export default Header;
