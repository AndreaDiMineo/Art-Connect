import "./styles.css";
import { useState } from "react";
import Footer from "../homepage/footer";
import Header from "../searchmuseum/components/header";
import { Link } from "react-router-dom";

export default function Profile() {
  const [toggle, setToggle] = useState(false);

  const follow = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  return (
    <div>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <Header />
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
                      <h4>Username</h4>
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
                    <div className="col-sm-9 text-secondary">Name Surname</div>
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
                        example@gmail.com
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
                    <div className="col-sm-9 text-secondary">0</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-10">
                      <Link className="btn-settings" to={"/edit-profile"}>
                        Edit Profile
                      </Link>
                      <a
                        className="btn-settings"
                        href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills"
                      >
                        Change Password
                      </a>
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
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center mb-3">
                        Reviews
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
