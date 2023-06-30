import MuseumProfile, { MuseumStats } from "../../museumprofile/components/museumprofile";
import "../styles/museumStyle.css";
import { useState } from "react";
import { Background } from "./searchmuseum";

const Museum = ({ name, km, category, rating }) => {
  const [ profile, setProfile ] = useState(false);
  const { main, mapSection } = Background();
  const card = document.querySelector(".museumCard");
  const ClickProfile = (stato) => {
    main.addEventListener('click', () => {
      setProfile(false);
      main.style.backgroundColor = "";
      mapSection.style.display = "block";
    })
    setProfile(stato);
    if (stato === true) {
      card.style.position = "relative";
      mapSection.style.display = "none";
      main.style.zIndex = 1;
      main.style.left = 0;
      main.style.top = 0;
      main.style.overflow = "auto";
      main.style.backgroundColor = "rgba(0,0,0,0.7)";
    }
    else {
      main.style.backgroundColor = "";
      mapSection.style.display = "block";
    }
  }
  return (
    <div className="museumCard">
      <div className="museumCardLeft">
        <img
          className="museumImg"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Field_Museum_of_Natural_History.jpg/1280px-Field_Museum_of_Natural_History.jpg"
          onClick={!profile === true ? () => ClickProfile(true) : () => ClickProfile(false)}
        />
      </div>
      <div className="museumCardRight">
        <h3 className="museumTitle">Field Museum of Natural History</h3>
        <div className="museumSubtitle">
          <div className="museumDistance">
            <img
              className="museum_icons"
              src="https://i.ibb.co/4JWWxhz/map-pin.png"
              alt=""
            />
            <p>{parseFloat(km).toFixed(2)}km</p>
          </div>
          <div className="museumType">
            <img
              className="museum_icons"
              src="https://i.ibb.co/Lh7YZq8/grid.png"
              alt=""
            />
            <p>{category}</p>
          </div>
        </div>
        <div className="museumRating">
          <img
            className="museum_icons"
            src="https://i.ibb.co/CsM31z2/star.png"
            alt=""
          />
          <p>{rating}</p>
        </div>
      </div>
      { !profile === true ? null : <MuseumProfile/> }
    </div>
  );
};

export default Museum;
