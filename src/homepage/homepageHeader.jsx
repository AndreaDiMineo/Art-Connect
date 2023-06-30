import React from "react";
const HomepageHeader = () => {
  const ExtendInputBar = () => {
    const search = document.querySelector(".input");
    const info = document.querySelector(".right-info");
    search.setAttribute("placeholder", "Inserisci la tua città");
    search.style.transition = "width 1s";
    search.style.width = "10rem";
    search.style.marginTop = "0.7%";
    info.style.marginLeft = "62%";
  };

  const OriginalInputBar = () => {
    const search = document.querySelector(".input");
    const info = document.querySelector(".right-info");
    search.removeAttribute("placeholder");
    search.style.width = "2.5rem";
    search.style.marginTop = "1.5%";
    info.style.marginLeft = "70%";
  };
  return (
    <header>
      <img
        className="logo"
        src="https://i.ibb.co/sq7qsF4/logo-Art-Connect-White.png"
      />
      <a className="link" href="#">
        Visita
      </a>
      <div className="input-geo">
        <input className="input" onMouseOut={OriginalInputBar} />
        <img
          className="map-pin"
          src="https://i.ibb.co/4JWWxhz/map-pin.png"
          onMouseOver={ExtendInputBar}
        />
      </div>
      <div className="right-info">
        <button className="button">
          <a href="login">Accedi</a>
        </button>
        <img className="globe" src="https://i.ibb.co/M24xQDv/globe.png" />
      </div>
    </header>
  );
};

export default HomepageHeader;
