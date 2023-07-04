import React, { useContext } from "react";
import "./forget.css";
import { FuncContext } from "./context";
import { Link } from "react-router-dom";

const ForgetYourPassword = () => {
  const { toggle, Forget } = useContext(FuncContext);
  return (
    <React.Fragment>
      <section class="vh-100">
        <div class="container-fluid h-custom">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                class="img-fluid"
                alt="Sample image"
              />
            </div>

            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <Link className="navbar-brand" to={"/"}>
                    <img
                      className="logoHeader"
                      src="https://i.ibb.co/dLNs635/logo-Art-Connect-Black.png"
                      alt="ArtConnect"
                    />
                  </Link>
                  <h3>Recupera Password</h3>
                </div>
                <div className="divider d-flex align-items-center my-4"></div>
                <div class="form-outline">
                  <label class="form-label" for="form3Example3">
                    Inserire email
                  </label>
                  <div class="input-group mb-3">
                    <input
                      type="email"
                      class="form-control form-control-lg"
                      placeholder="Inserisci il tuo indirizzo email "
                      aria-label="Enter your email"
                      aria-describedby="basic-addon2"
                    />
                  </div>
                </div>
                <div class="button-group">
                  <button
                    onClick={Forget}
                    type="button"
                    class="btn btn-secondary"
                    id="cancel"
                  >
                    <Link to={"/login"} className="disableLink">
                      Cancella
                    </Link>
                  </button>
                  <button type="button" class="btn btn-primary">
                    Invia email
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ForgetYourPassword;
