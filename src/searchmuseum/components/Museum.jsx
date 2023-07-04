import MuseumProfile from "../../museumprofile/components/museumprofile";
import "../styles/museumStyle.css";
import { useState } from "react";
import { Background } from "./searchmuseum";

const Museum = ({ info }) => {
  console.log(info);
  const [profile, setProfile] = useState(false);
  const { main, mapSection } = Background();
  const ClickProfile = (stato) => {
    main.addEventListener("click", () => {
      setProfile(false);
      main.style.backgroundColor = "";
      mapSection.style.display = "block";
    });
    setProfile(stato);
    if (stato === true) {
      //card.style.position = "relative";
      mapSection.style.display = "none";
      main.style.zIndex = 1;
      main.style.left = 0;
      main.style.top = 0;
      main.style.overflow = "auto";
      main.style.opacity = 0.5;
    } else {
      main.style.backgroundColor = "";
      mapSection.style.display = "block";
    }
  };
  return (
    <div className="museumCard">
      <div className="museumCardLeft">
        <img
          className="museumImg"
          src={info.url}
          alt={info.name}
          onClick={
            !profile === true
              ? () => ClickProfile(true)
              : () => ClickProfile(false)
          }
        />
      </div>
      <div className="museumCardRight">
        <h4 className="museumTitle">{info.name}</h4>
        <div className="museumSubtitle">
          <div className="museumDistance">
            <img
              className="museum_icons"
              src="https://i.ibb.co/4JWWxhz/map-pin.png"
              alt=""
            />
            <p>{parseFloat(info.km).toFixed(2)}km</p>
          </div>
          <div className="museumType">
            <img
              className="museum_icons"
              src="https://i.ibb.co/Lh7YZq8/grid.png"
              alt=""
            />
            <p>{info.category}</p>
          </div>
        </div>
        <div className="museumRating">
          <img
            className="museum_icons"
            src="https://i.ibb.co/CsM31z2/star.png"
            alt=""
          />
          <p>{info.rating}</p>
        </div>
      </div>
      {!profile === true ? null : <MuseumProfile info={info} />}
    </div>
  );
};

export default Museum;
