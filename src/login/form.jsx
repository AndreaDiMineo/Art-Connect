import React, { useState, useContext } from "react";
import "./form.css";
import { FuncContext } from "./context";
import { Link, useNavigate } from "react-router-dom";
import app from "../database/databaseHandler";

const db = app.firestore();

const Form = () => {
  const [utenti, setUtenti] = useState([]);
  const navigate = useNavigate();
  const { auth } = useContext(FuncContext);
  // const emailRef = useRef(null);
  // jsx :  ref={emailRef}
  // const passwordRef = useRef(null);
  // jsx : ref={passwordRef}

  const addData = async (evento) => {
    evento.preventDefault();
    const status = "login";
    //questi 
    const form = document.querySelector("form");
    const inputs = form.querySelectorAll("input");
//=>
     //const emailValue = emailRef.current.value;
    //const passwordValue = passwordRef.current.value;
    const snapshot = await db.collection("Utente").get();
    const utenteData = snapshot.docs.map((doc) => doc.data());
    setUtenti(utenteData);
    const utentiDb = [...utenti];
    let loginControl = false;
    utentiDb.map((utente) => {
     //  if (emailValue === utente.email && passwordValue === utente.password) { 
      if (
        inputs[0].value === utente.email &&
        inputs[1].value === utente.password
      ) {
        auth(
          utente.name,
          utente.surname,
          utente.username,
          utente.email,
          utente.password,
          status
        );
        loginControl = true;
        navigate("/");
      }
      console.log(utente);
    });
    if (loginControl === false) {
      alert("Username e/o password sbagliato/i");
    }
  };
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
              <form onSubmit={addData}>
                <div class="d-flex flex-row align-items-center justify-content-center">
                  <Link className="navbar-brand" to={"/"}>
                    <img
                      className="logoHeader"
                      src="https://i.ibb.co/dLNs635/logo-Art-Connect-Black.png"
                      alt="ArtConnect"
                    />
                  </Link>
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
                    Indirizzo email
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="email"
                      class="form-control form-control-lg"
                      placeholder="Inserisci il tuo indirizzo email"
                      aria-label="Enter your email"
                      aria-describedby="basic-addon2"
                    />
                  </div>
                </div>

                <div className="form-outline mb-3">
                  <label className="form-label" htmlFor="form3Example4">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    class="form-control form-control-lg"
                    placeholder="Inserisci password"
                    onClick={passwordInfo}
                    onBlur={passwordNascondi}
                  />
                  {showInfoPassword && (
                    <p>
                      La password deve contenere almeno 8 caratteri con almeno
                      una lettera maiuscola, un numero e un carattere speciale.
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
                    <label className="form-check-label" htmlFor="form2Example3">
                      Ricordami
                    </label>
                  </div>
                  <Link to={"/passwordreset"} className="text-body">
                    Password dimenticata?
                  </Link>
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
                    Non hai un account?{" "}
                    <Link to={"/register"} className="link-danger">
                      Registrati
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Form;
