import MuseumProfile, {
  MuseumProfileStats,
} from "../../museumprofile/components/museumprofile";
import "../styles/museumStyle.css";
import { useState } from "react";
import { Background } from "./searchmuseum";

const Museum = ({ info }) => {
  const [profile, setProfile] = useState(false);
  const { main, mapSection } = Background();
  const { museumProfile } = MuseumProfileStats();
  const ClickProfile = (stato) => {
    main.addEventListener("click", () => {
      setProfile(false);
      main.style.backgroundColor = "";
      main.style.opacity = 1;
      mapSection.style.display = "block";
    });
    setProfile(stato);
    if (stato === true) {
      mapSection.style.display = "none";
      main.style.zIndex = 1;
      main.style.left = 0;
      main.style.top = 0;
      main.style.overflow = "auto";
      main.style.opacity = 0.5;
      //museumProfile.style.opacity = 1;
    }
  };
  return (
    <div className="museumCard">
      <div className="museumCardLeft">
        <img
          className="museumImg"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Field_Museum_of_Natural_History.jpg/1280px-Field_Museum_of_Natural_History.jpg"
          alt={info.name}
          onClick={
            !profile === true
              ? () => ClickProfile(true)
              : () => ClickProfile(false)
          }
        />
      </div>
      <div className="museumCardRight">
        <h4 className="museumTitle">{info.nome}</h4>
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
