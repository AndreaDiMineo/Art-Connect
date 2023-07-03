import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <React.Fragment>
      <nav
        class="navbar  fixed-top bg-dark border-bottom border-bottom-dark navbar-expand"
        data-bs-theme="dark"
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              className="logoHeader"
              src="https://i.ibb.co/RY9k5Yk/logo-Art-Connect-White.png"
              alt="ArtConnect"
            />
          </a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to={"/"}>
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/dashboard"}>
                  Musei
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/"}>
                  Eventi
                </Link>
              </li>
            </ul>
          </div>
          <div className="RighSide">
            <div class="form-floating-sm mb-0 ">
              <input
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="Search"
              />
              <label for="floatingInput">Cerca</label>
            </div>
            <Link to="/login">
              <button id="accedi" type="button" class="btn btn-outline-light">
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
