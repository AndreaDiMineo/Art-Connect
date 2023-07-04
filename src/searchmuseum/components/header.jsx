import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import "../styles/headerStyle.css";

const Nav = () => {
  const location = useLocation();
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location])
  return (
    <header className="header">
        <nav
          class="navbar  fixed-top bg-dark border-bottom border-bottom-dark navbar-expand"
          data-bs-theme="dark"
        >
          <div class="container-fluid">
            <Link className="navbar-brand" to={"/"}>
              <img
                className="logoHeader"
                src="https://i.ibb.co/RY9k5Yk/logo-Art-Connect-White.png"
                alt="ArtConnect"
              />
            </Link>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link
                    className={"nav-link " + (url === "/" ? " active" : "")}
                    to={"/"}
                  >
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    className={"nav-link" + (url === "/museums" ? " active" : "")}
                    to={"/museums"}
                  >
                    Musei
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    className={"nav-link" + (url === "/events" ? " active" : "")}
                    to={"/events"}
                  >
                    Eventi
                  </Link>
                </li>
              </ul>
            </div>
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
            <Link to={"/profile"}><img className="globe" src="https://i.ibb.co/YLNmppN/icons8-person-24.png" title="Profilo"
                alt="Profilo"/></Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
