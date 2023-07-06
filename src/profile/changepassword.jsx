import "./changepasswordstyle.css";
import {Link} from "react-router-dom"

export default function ChangePassword() {
  const showHidePWD = () => {
    const toggle1 = document.getElementById("password");
    const toggle2 = document.getElementById("confirmPassword");

    if (toggle1.type === "password") {
      toggle1.type = "text";
      toggle2.type = "text";
    } else {
      toggle1.type = "password";
      toggle2.type = "password";
    }
  };

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <div className="mainDivChangePWD">
        <div className="cardStyleChangePWD">
          <form action="" method="post" name="signupForm" id="signupForm">
            <Link to="/profile">
            <img
              src="https://i.ibb.co/WFy8gDh/image.png"
              alt="image"
              id="signupLogoChangePWD"
            />
            </Link>
            <h2 className="formTitleChangePWD">Cambia password</h2>
            <div className="inputDivChangePWD">
              <label className="inputLabelChangePWD" htmlFor="password">
                Email
              </label>
              <input type="email" id="email" name="email" required="" />
            </div>
            <div className="inputDivChangePWD">
              <label className="inputLabelChangePWD" htmlFor="password">
                Nuova Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required=""
              />
            </div>
            <div className="inputDivChangePWD">
              <label className="inputLabelChangePWD" htmlFor="confirmPassword">
                Conferma Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
              />
            </div>
            <label className="checkDivChangePWD">
              <input
                type="checkbox"
                id="showHide"
                name="showHide"
                onClick={showHidePWD}
              />
              <label className="showpwdLabelChangePWD">Mostra password</label>
            </label>
            <div className="buttonWrapperChangePWD">
              <button
                type="submit"
                id="submitButton"
                className="btn btn-primary"
              >
                <span>Conferma</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
