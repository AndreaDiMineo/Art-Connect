import { Link } from "react-router-dom";
import "../styles/headerStyle.css";
import React from "react";
const Nav = () => {
  return (
    <header className="header">
      <div className="headerLeft">
        <Link className="btn-links" to={"/"}>
          <img
            className="logo"
            src="https://i.ibb.co/sq7qsF4/logo-Art-Connect-White.png"
            title="ArtConnect"
            alt="logo"
          />
        </Link>
        <nav className="navLinks">
          <button className="linkBtn">
            <Link className="link--btn" to={"/museums"}>
              Musei
            </Link>
          </button>
          <button className="linkBtn">Eventi</button>
          <button className="linkBtn">Assistenza</button>
        </nav>
      </div>
      <div className="headerRight">
        <div className="headerRightIcons">
          <img
            className="globe"
            src="https://i.ibb.co/M24xQDv/globe.png"
            title="Cambia lingua"
            alt="Cambia lingua"
          />
          <img
            className="globe"
            src="https://i.ibb.co/CWYtHLZ/bell.png"
            title="Notifiche"
            alt="Notifiche"
          />
          <a href="profile">
            <img
              className="globe"
              src="https://i.ibb.co/YLNmppN/icons8-person-24.png"
              title="Profilo"
              alt="Profilo"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Nav;
