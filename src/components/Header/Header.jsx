import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <section>
        <h2>Dhritiman Kashyap</h2>
        <span>Student at ARBA</span>
        <p>
          Hello, I'm a student studying in 11th standard, as well as a web
          developer. I've been learning web development since I was in sixth
          standard. Through these years, I've learnt HTML, CSS, JS, Python, and
          also framework/libraries like React, TailwindCSS etc.
        </p>
      </section>
      <img src="../img/headerimg.jpeg" alt="Logo" />
    </header>
  );
};

export default Header;
