import "./styles.css";
import { useContext, useEffect, useState } from "react";
import Footer from "../home/Footer";
import Navbar from "../home/Navbar.jsx";
import { Link } from "react-router-dom";
//import app from "../database/databaseHandler";
import { FuncContext } from "../login/context";
import { useNavigate } from "react-router-dom";
import { appDb } from "../firebaseConfig";
import ChangePassword from "./changepassword";
const dbA = appDb.firestore();

//const db = app.firestore();
//const storage = app.storage();

export default function Profile() {
  const [visited, setVisited] = useState([
    "British Museum",
    "Museo Del Louvre",
    "Musei Vaticani",
    "Metropolitan Museum of Art",
  ]);
  const [review, setReview] = useState([
    "una bella esperienza",
    "esperienza sicuramente da ripetere!",
    "non il massimo ma accettabile...",
    "capolavoro con la C maiuscola!",
  ]);

  const navigate = useNavigate();
  const { logged, setLogged } = useContext(FuncContext);
  const [toggle, setToggle] = useState(false);

  const follow = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  const { credentials } = useContext(FuncContext);
  const info = {...credentials};

  useEffect(() => {
    if (!logged) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossOrigin="anonymous"
      />
      <Navbar />
      <div className="container">
        <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt="Admin"
                      className="rounded-circle"
                      width={150}
                    />
                    <div className="mt-4">
                      <h4>{info.username}</h4>
                      {!toggle ? (
                        <button className="btn btn-primary" onClick={follow}>
                          Follow
                        </button>
                      ) : (
                        <button
                          className="btn btn-primary"
                          onClick={follow}
                          style={{
                            color: "#007bff",
                            backgroundColor: "white",
                            borderColor: "#2c56e8",
                          }}
                        >
                          Followed
                        </button>
                      )}
                      <button className="btn btn-outline-primary">
                        Message
                      </button>
                      <button
                        onClick={() => {
                          setLogged(false);
                          navigate("/");
                        }}
                        className="btn btn-outline-secondary"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {info.name} {info.surname}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="781e110838120d13150d10561914"
                      >
                        {info.email}
                      </a>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Language</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">English</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">N. Visited Museums</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {visited.length}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-10">
                      <Link className="btn-settings" to={"/edit-profile"}>
                        Edit Profile
                      </Link>
                      <Link className="btn-settings" to={"/changepassword"}>
                        Change Password
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row gutters-sm">
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center mb-3">
                        Visited Museums
                      </h6>
                      <p>
                        {visited.length > 0 ? (
                          <ul>
                            {visited.map((visit) => (
                              <li key={visit.id}>{visit}</li>
                            ))}
                          </ul>
                        ) : (
                          <p>Nessuna visita trovata </p>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      {" "}
                      <h6 className="d-flex align-items-center mb-3">
                        Reviews
                      </h6>
                      {review.length > 0 ? (
                        <ul>
                          {review.map((rev) => (
                            <li key={rev.id}>{rev}</li>
                          ))}
                        </ul>
                      ) : (
                        <p>Nessuna visita trovata </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
