import "../styles/SearchMuseum.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import Header from "./Header";
import { Map, Marker, NavigationControl } from "react-map-gl";
import { useState, useContext, useRef } from "react";
import { ViewContext } from "../hooks/view-context";
import Museum from "./Museum";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYWRlcGVkcmluaSIsImEiOiJjbGlrMzd2dWEwZWI5M2trZG5wem04eWV5In0.xku2He5nmX0r89rngZndlQ";

const SearchMuseum = () => {
  const { view, setView, setViewState } = useContext(ViewContext);
  const ref = useRef(view);
  const [marker, setMarker] = useState({
    latitude: ref.current.latitude,
    longitude: ref.current.longitude,
  });
  const setCenter = (lng, lat) => {
    setView(lng, lat);
    setMarker({
      longitude: lng,
      latitude: lat,
    });
  };
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(getCoordsLocation);
  };
  const getCoordsLocation = (pos) => {
    setCenter(pos.coords.longitude, pos.coords.latitude);
  };

  const Geocoding = (citta) => {
    const API = "https://geocode.maps.co/search?q=" + encodeURI(citta);
    const response = fetch(API)
      .then((res) => res.json())
      .then((json) => {
        setCenter(json[0].lon, json[0].lat);
      });
  };

  const CheckGeoInput = (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      const citta = e.target.value;
      if (citta !== "") {
        Geocoding(citta);
      }
    }
  };

  return (
    <div className="rootSearchMuseum">
      <Header />
      <main className="pageSearchMuseum">
        <h1>Cosa vuoi visitare?</h1>
        <section className="mainSearchMuseum">
          <div className="mainLeft">
            <div className="geo">
              <div className="geoInput">
                <input
                  id="geoInput_input"
                  className="geoInput_input"
                  placeholder="Inserire la tua città"
                  onKeyUp={CheckGeoInput}
                />
                <img
                  className="mapPin"
                  src="https://i.ibb.co/4JWWxhz/map-pin.png"
                  alt=""
                  onClick={getLocation}
                />
              </div>
              <div className="geoFilter">
                <img
                  className="mapPin"
                  src="https://i.ibb.co/4JWWxhz/map-pin.png"
                  alt=""
                />
              </div>
            </div>
            <div className="museums">
              <Museum />
              <Museum />
              <Museum />
              <Museum />
              <Museum />
              <Museum />
            </div>
          </div>
          <div className="mainRight">
            <Map
              {...view}
              onMove={(evt) => {
                setViewState(evt.viewState);
              }}
              style={{ width: "100%", height: "60vh" }}
              mapStyle="mapbox://styles/mapbox/streets-v9"
              mapboxAccessToken={MAPBOX_TOKEN}
            >
              <Marker
                longitude={marker.longitude}
                latitude={marker.latitude}
                color="red"
              />
              <NavigationControl />
            </Map>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SearchMuseum;
