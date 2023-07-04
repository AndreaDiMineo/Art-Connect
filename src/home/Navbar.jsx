import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FuncContext } from "../login/context";
import { useContext } from "react";
const NavBar = () => {
  const location = useLocation(); // once ready it returns the 'window.location' object
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  const { logged } = useContext(FuncContext);
  return (
    <React.Fragment>
      <nav
        className="navbar  fixed-top bg-dark border-bottom border-bottom-dark navbar-expand"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            <img
              className="logoHeader"
              src="https://i.ibb.co/RY9k5Yk/logo-Art-Connect-White.png"
              alt="ArtConnect"
            />
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={"nav-link " + (url === "/" ? " active" : "")}
                  to={"/"}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={"nav-link" + (url === "/museums" ? " active" : "")}
                  to={"/museums"}
                >
                  Musei
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={"nav-link" + (url === "/events" ? " active" : "")}
                  to={"/events"}
                >
                  Eventi
                </Link>
              </li>
            </ul>
          </div>
          <div className="RighSide">
            <div className="form-floating-sm mb-0 ">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Ricerca"
              />
              <label htmlFor="floatingInput">Cerca</label>
            </div>
            {!logged ? (
              <Link to="/login">
                <button
                  id="accedi"
                  type="button"
                  className="btn btn-outline-light"
                >
                  Accedi
                </button>
              </Link>
            ) : (
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
            )}
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};
export default NavBar;
