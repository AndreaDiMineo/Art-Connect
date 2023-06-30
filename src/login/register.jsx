import "./style.css";
import React, { useContext } from "react";
import { FuncContext } from "./context";

const Register = () => {
  const { passwordNascondi, passwordInfo, showInfoPassword } =
    useContext(FuncContext);
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
              <form id="formRegister">
                <div
                  id="one"
                  class="d-flex flex-row align-items-center justify-content-center"
                >
                  <p class="lead fw-normal mb-1 me-3">Register with</p>
                  <picture style={{ marginRight: "10px" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-chrome"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="4"></circle>
                      <line x1="21.17" y1="8" x2="12" y2="8"></line>
                      <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
                      <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
                    </svg>
                  </picture>

                  <picture style={{ marginRight: "10px" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-facebook"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </picture>

                  <picture>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-twitter"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </picture>
                </div>

                <div class="divider d-flex align-items-center my-2">
                  <p class="text-center fw-bold mx-3 mb-0">Or</p>
                </div>
                <div class="form-outline mb-2 ">
                  <label class="form-label" for="form3Example1cg">
                    Name<span style={{ color: "red" }}> *</span>
                  </label>
                  <input
                    type="text"
                    id="form3Example1cg"
                    class="form-control form-control-md"
                  />
                </div>
                <div class="form-outline ">
                  <label class="form-label" for="form3Example1cg">
                    Surname<span style={{ color: "red" }}> *</span>
                  </label>
                  <input
                    type="text"
                    id="form3Example1cg"
                    class="form-control form-control-md"
                  />
                </div>

                <div class="form-outline ">
                  <label class="form-label" for="form3Example3">
                    Email address<span style={{ color: "red" }}> *</span>
                  </label>
                  <div class="input-group ">
                    <input
                      type="email"
                      class="form-control form-control-md"
                      placeholder="Enter your email "
                      aria-label="Enter your email"
                      aria-describedby="basic-addon2"
                    />
                    <span class="input-group-text" id="basic-addon2">
                      @example.com
                    </span>
                  </div>
                </div>
                <div class="form-outline ">
                  <label class="form-label" for="form3Example3cg">
                    Username<span style={{ color: "red" }}> *</span>
                  </label>
                  <input
                    type="text"
                    id="form3Example3cg"
                    class="form-control form-control-md"
                  />
                </div>

                <div class="form-outline ">
                  <label class="form-label" for="form3Example4cg">
                    Password<span style={{ color: "red" }}> *</span>
                  </label>
                  <input
                    type="password"
                    id="form3Example4cg"
                    class="form-control form-control-md"
                    onClick={passwordInfo}
                    onBlur={passwordNascondi}
                  />
                  {showInfoPassword && (
                    <p>
                      Password must contain at least 8 characters with uppercase
                      letters and at least one number and one special character.
                    </p>
                  )}
                </div>

                <label class="form-label" for="form3Example3cg">
                  Select your language<span style={{ color: "red" }}> *</span>
                </label>
                <select
                  class="form-select form-select-sm mb-3"
                  aria-label="Default select example"
                >
                  <option selected></option>
                  <option value="1">English</option>
                  <option value="2">Italiano</option>
                  <option value="3">Español</option>
                  <option value="4">Deutsch</option>
                  <option value="5">Français</option>
                </select>

                <div class="form-check d-flex mb-2">
                  <input
                    class="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3cg"
                  />
                  <label class="form-check-label" for="form2Example3g">
                    I agree all statements in{" "}
                    <a href="#!" class="text-body">
                      <u>Terms of service</u>
                    </a>
                    <span style={{ color: "red" }}> *</span>
                  </label>
                </div>
                <div class="form-check d-flex mb-3">
                  <input
                    class="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3cg"
                  />
                  <label class="form-check-label" for="form2Example3g">
                    I agree to receiving notifications
                  </label>
                </div>

                <div class="d-flex justify-content-center">
                  <button
                    type="submit"
                    class="btn btn-primary btn-lg"
                    id="login-btn"
                  >
                    Create Account
                  </button>
                </div>

                <p class="text-center text-muted mt-3 mb-0">
                  Have already an account?{" "}
                  <a href="login" class="fw-bold text-body">
                    <u style={{ color: "red" }}>Login here</u>
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Register;
