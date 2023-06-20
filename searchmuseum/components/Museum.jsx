import "../styles/Museum.css";

const Museum = () => {
  return (
    <div className="museumCard">
      <div className="museumCardLeft">
        <img
          className="museumImg"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Field_Museum_of_Natural_History.jpg/1280px-Field_Museum_of_Natural_History.jpg"
        />
      </div>
      <div className="museumCardRight">
        <h3 className="museumTitle">Field Museum of Natural History</h3>
        <div className="museumSubtitle">
          <div className="museumDistance">
            <img
              className="mapPin_museum"
              src="https://i.ibb.co/4JWWxhz/map-pin.png"
              alt=""
            />
            <p>4km</p>
          </div>
          <div className="museumType">
            <img
              className="mapPin_museum"
              src="https://i.ibb.co/4JWWxhz/map-pin.png"
              alt=""
            />
            <p>Storia naturale</p>
          </div>
        </div>
        <div className="museumRating">
          <img
            className="mapPin_museum"
            src="https://i.ibb.co/4JWWxhz/map-pin.png"
            alt=""
          />
          <p>4.0</p>
        </div>
      </div>
    </div>
  );
};

export default Museum;
