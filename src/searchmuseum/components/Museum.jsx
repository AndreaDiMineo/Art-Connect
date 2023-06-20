import MuseumProfile from "../../museumprofile/museumprofile";
import "../styles/museumStyle.css";
import { useContext } from "react";
import { FilterContext } from "../hooks/filter-context";

const Museum = ({ km }) => {
  const { rating, category } = useContext(FilterContext);
  const ClickProfile = () => {
    return (
      <div>
        <MuseumProfile />
      </div>
    );
  };
  return (
    <div className="museumCard">
      <div className="museumCardLeft">
        <img
          className="museumImg"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Field_Museum_of_Natural_History.jpg/1280px-Field_Museum_of_Natural_History.jpg"
          onClick={ClickProfile}
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
            <p>{km}km</p>
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
          <p>{!rating ? 4.0 : 5.0}</p>
        </div>
      </div>
    </div>
  );
};

export default Museum;
