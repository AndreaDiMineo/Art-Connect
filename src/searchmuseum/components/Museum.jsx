import MuseumProfile from "../../museumprofile/components/museumprofile";
import "../styles/museumStyle.css";
import { useState } from "react";
import { Background } from "./searchmuseum";
import app from "../../database/databaseHandler";

const db = app.firestore();
const storage = app.storage();

const Museum = ({ name, data, info }) => {
  console.log(name);
  console.log(data);
  console.log(info);
  const [profile, setProfile] = useState(false);
  const { main, mapSection } = Background();
  const card = document.querySelector(".museumCard");
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
          onClick={
            !profile === true
              ? () => ClickProfile(true)
              : () => ClickProfile(false)
          }
        />
      </div>
      <div className="museumCardRight">
        <h4 className="museumTitle">{name}</h4>
        <div className="museumSubtitle">
          <div className="museumDistance">
            <img
              className="museum_icons"
              src="https://i.ibb.co/4JWWxhz/map-pin.png"
              alt=""
            />
            <p>{parseFloat(data[0]).toFixed(2)}km</p>
          </div>
          <div className="museumType">
            <img
              className="museum_icons"
              src="https://i.ibb.co/Lh7YZq8/grid.png"
              alt=""
            />
            <p>{data[1]}</p>
          </div>
        </div>
        <div className="museumRating">
          <img
            className="museum_icons"
            src="https://i.ibb.co/CsM31z2/star.png"
            alt=""
          />
          <p>{data[2]}</p>
        </div>
      </div>
      {!profile === true ? null : (
        <MuseumProfile
          data={info}
          km={data[0]}
          category={data[1]}
          rating={data[2]}
        />
      )}
    </div>
  );
};

export default Museum;
