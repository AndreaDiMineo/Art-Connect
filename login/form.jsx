import React, { useContext } from "react";
import "./form.css";
import { FuncContext } from "./context";
import Register from "./register";
import ForgetYourPassword from "./forgetYourPassword";

const Form = () => {
    const {
        toggle,
        submitForm,
        register,
        passwordNascondi,
        passwordInfo,
        showInfoPassword,
        togglePass,
        Forget
    } = useContext(FuncContext);

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
                            {!togglePass ? (
                                toggle ? (
                                    <form>
                                        <div class="d-flex flex-row align-items-center justify-content-center">
                                            <p className="lead fw-normal mb-0 me-3">Sign in with</p>
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

                                        <div className="divider d-flex align-items-center my-4">
                                            <p className="text-center fw-bold mx-3 mb-0">Or</p>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form3Example3">
                                                Email address
                                            </label>
                                            <div className="input-group mb-3">
                                                <input
                                                    type="email"
                                                    className="form-control form-control-lg"
                                                    placeholder="Enter your email"
                                                    aria-label="Enter your email"
                                                    aria-describedby="basic-addon2"
                                                />
                                                <span className="input-group-text" id="basic-addon2">
                                                    @example.com
                                                </span>
                                            </div>
                                        </div>

                                        <div className="form-outline mb-3">
                                            <label className="form-label" htmlFor="form3Example4">
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                id="password"
                                                className="form-control form-control-lg"
                                                placeholder="Enter password"
                                                onClick={passwordInfo}
                                                onBlur={passwordNascondi}
                                            />
                                            {showInfoPassword && (
                                                <p>
                                                    Password must contain at least 8 characters with
                                                    uppercase letters and at least one number and one
                                                    special character.
                                                </p>
                                            )}
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="form-check mb-0">
                                                <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    value=""
                                                    id="form2Example3"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="form2Example3"
                                                >
                                                    Remember me
                                                </label>
                                            </div>
                                            <a href="#!" className="text-body" onClick={Forget}>
                                                Forgot password?
                                            </a>
                                        </div>

                                        <div className="text-center text-lg-start mt-4 pt-2">
                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-lg"
                                                id="login-btn"
                                            >
                                                Login
                                            </button>
                                            <p className="small fw-bold mt-2 pt-1 mb-0">
                                                Don't have an account?{" "}
                                                <a href="#!" className="link-danger" onClick={register}>
                                                    Register
                                                </a>
                                            </p>
                                        </div>
                                    </form>
                                ) : (
                                    <Register />
                                )
                            ) : (
                                <ForgetYourPassword />
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Form;