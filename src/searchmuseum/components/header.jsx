import { Link } from "react-router-dom";
import "../styles/headerStyle.css";
import React from "react";import React from "react";
const Nav = () => {
  return (
    <header className="header">
      <div className="headerLeft">
<<<<<<< ssName="linkBtn">
            <Link className="btn-links" to={"/dashboard"}>
              Musei
            </Link>
          </button>
          <button className="linkBtn">Eventi</button>
          <button className="linkBtn">Assistenza</button>
<<<<<<< </nav>ssName="linkBtn">
            <Link className="btn-links" to={"/dashboard"}>
              Musei
            </Link>
          </button>
          <button className="linkBtn">Eventi</button>
          <button className="linkBtn">Assistenza</button>
        </nav>
      </div>
      <div className="headerRight">
        <div className="headerRightIcons">
          <img className="globe" src="https://i.ibb.co/M24xQDv/globe.png" />
          <img className="globe" src="https://i.ibb.co/CWYtHLZ/bell.png" />
          <Link to={"/profile"}>
            <img
              className="globe"
              src="https://i.ibb.co/YLNmppN/icons8-person-24.png"
              title="Profilo"
              alt="Profilo"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Nav;
