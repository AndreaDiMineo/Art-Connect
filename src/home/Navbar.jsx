import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
const NavBar = () => {
  const location = useLocation(); // once ready it returns the 'window.location' object
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);
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
                  to={"/"}
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
                placeholder="Search"
              />
              <label htmlFor="floatingInput">Cerca</label>
            </div>
            <Link to="/login">
              <button
                id="accedi"
                type="button"
                className="btn btn-outline-light"
              >
                Accedi
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};
export default NavBar;
