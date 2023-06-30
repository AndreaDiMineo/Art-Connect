import MuseumProfile from "../../museumprofile/components/museumprofile";
import "../styles/museumStyle.css";

const Museum = ({ name, km, category, rating }) => {
  const clickProfile = () => {
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
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Field_Museum_of_Natural_History.jpg/1280px-Field_Museum_of_Natural_History.jpg"
          onClick={clickProfile}
        />
      </div>
      <div className="museumCardRight">
        <h3 className="museumTitle">{name}</h3>
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
    </div>
  );
};

export default Museum;
