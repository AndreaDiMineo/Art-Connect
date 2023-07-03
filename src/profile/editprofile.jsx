import "./stylesedit.css";
import Footer from "../homepage/footer";
import Header from "../searchmuseum/components/header";
import React from "react";
export default function EditProfile() {
  return (
    <React.Fragment>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <Header />
      <div className="container-xl px-4 mt-4">
        <hr className="mt-0 mb-4" />
        <div className="row">
          <div className="col-xl-4">
            <div className="card mb-4 mb-xl-0">
              <div className="card-header">Foto Profilo</div>
              <div className="card-body text-center">
                <img
                  className="img-account-profile rounded-circle mb-2"
                  src="http://bootdey.com/img/Content/avatar/avatar1.png"
                  alt=""
                />
                <div className="small font-italic text-muted mb-4">
                  JPG o PNG non più di 5 MB
                </div>
                <button className="btn btn-primary" type="button">
                  Carica nuova immagine
                </button>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="card mb-4">
              <div className="card-header">Dettagli Account</div>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="inputUsername">
                      Username (come il tuo nome danzerà nella mente degli altri utenti sul sito)
                    </label>
                    <input
                      className="form-control"
                      id="inputUsername"
                      type="text"
                      placeholder="Enter your username"
                      defaultValue="username"
                    />
                  </div>
                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputFirstName">
                        Nome
                      </label>
                      <input
                        className="form-control"
                        id="inputFirstName"
                        type="text"
                        placeholder="Enter your first name"
                        defaultValue="Valerie"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputLastName">
                        Cognome
                      </label>
                      <input
                        className="form-control"
                        id="inputLastName"
                        type="text"
                        placeholder="Enter your last name"
                        defaultValue="Luna"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="inputEmailAddress">
                      Indirizzo email
                    </label>
                    <input
                      className="form-control"
                      id="inputEmailAddress"
                      type="email"
                      placeholder="Enter your email address"
                      defaultValue="name@example.com"
                    />
                  </div>

                  <button className="btn btn-primary" type="button">
                    Salva modifiche
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
