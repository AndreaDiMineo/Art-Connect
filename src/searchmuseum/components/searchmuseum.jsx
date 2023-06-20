import "./searchmuseumStyle.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import Header from "./header";
import { Map, Marker, NavigationControl } from "react-map-gl";
import { useState, useContext, useRef } from "react";
import { ViewContext } from "./components/searchmuseum/hooks/view-context";
import { FilterContext, FilterProvider } from "../../components/searchmuseum/filter-context";
import Museum from "../components/museum";
import Footer from "../homepage/footer";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYWRlcGVkcmluaSIsImEiOiJjbGlrMzd2dWEwZWI5M2trZG5wem04eWV5In0.xku2He5nmX0r89rngZndlQ";

const SearchMuseum = () => {
  const { view, setView, setViewState } = useContext(ViewContext);
  const ref = useRef(view);
  const [marker, setMarker] = useState({
    latitude: ref.current.latitude,
    longitude: ref.current.longitude
  });
  const setCenter = (lng, lat) => {
    setView(lng, lat);
    setMarker({
      longitude: lng,
      latitude: lat
    });
  };
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(getCoordsLocation);
  };
  const getCoordsLocation = (pos) => {
    setCenter(pos.coords.longitude, pos.coords.latitude);
  };

  const Geocoding = (ricerca) => {
    const API = "https://geocode.maps.co/search?q=" + encodeURI(ricerca);
      const response = fetch(API)
        .then((res) => res.json())
        .then((json) => {
          if (json != '') {
            setCenter(json[0].lon, json[0].lat);
          }
          else {
            alert("Nessun risultato trovato");
          }
        });
  };

  const CheckGeoInput = (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      const ricerca = e.target.value;
      if (ricerca !== "") {
        Geocoding(ricerca);
      }
    }
  };

  const [filter, setFilter] = useState(false);
  const ClickFilter = () => {
    setFilter(true);  
    //background: rgba(0,0,0,0.5);
  }

  const { clickRating, clickCategory } = useContext(FilterContext);

  return (
    <div className="rootSearchMuseum">
      <Header />
      <main className="pageSearchMuseum">
        <h1>Cosa vuoi visitare?</h1>
        <section className="mainSearchMuseum">
          <div className="mainLeft">
            <div className="geo">
              <div className="search">
                <div className="geoInput">
                  <input
                    id="geoInput_input"
                    className="geoInput_input"
                    placeholder="Inserire la tua città o un museo specifico"
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
                    className="mapFilter"
                    src="https://i.ibb.co/PxsVrr6/filter.png"
                    onClick={ClickFilter}
                  />
                </div>
              </div>
              <div className="filters">
                <p onClick={clickRating}>4.0</p>
                <p>Più vicini</p>
                <p onClick={() => clickCategory("Storia")}>Storia</p>
                <p onClick={() => clickCategory("Arte")}>Arte</p>
                <p onClick={() => clickCategory("Tecnologia")}>Tecnologia</p>
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
        <Footer/>
      </main>
    </div>
  );
};

export default SearchMuseum;
