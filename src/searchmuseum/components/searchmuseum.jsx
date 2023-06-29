import "../styles/searchmuseumStyle.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import Header from "./Header";
import { Map, Marker, NavigationControl } from "react-map-gl";
import { useState, useContext, useRef } from "react";
import { ViewContext } from "../hooks/view-context";
import { FilterContext, FilterProvider } from "../hooks/filter-context";
import Museum from "./Museum";
import Footer from "../../homepage/footer";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYWRlcGVkcmluaSIsImEiOiJjbGlrMzd2dWEwZWI5M2trZG5wem04eWV5In0.xku2He5nmX0r89rngZndlQ";

const SearchMuseum = () => {
  //Gestione mappa
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

  //Geolocalizzazione
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(getCoordsLocation);
  };
  const getCoordsLocation = (pos) => {
    setCenter(pos.coords.longitude, pos.coords.latitude);
  };

  //Geocoding: ricerca per nome
  const Geocoding = (ricerca) => {
    const API = "https://geocode.maps.co/search?q=" + encodeURI(ricerca);
    fetch(API)
      .then((res) => res.json())
      .then((json) => {
        if (json != "") {
          setCenter(json[0].lon, json[0].lat);
        } else {
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

  //Gestione filtri
  const { filter, clickFilter, order, clickOrder, clickCategory, museums } =
    useContext(FilterContext);
  const [orderView, setOrderView] = useState(false);

  //Ordina musei
  const orderedMuseums = (order) => {
    let arr = museums;
    switch (order) {
      case "closest":
        arr = museums.toSorted((a, b) => {
          return a - b;
        });
        break;
      default:
        break;
    }
    const mus = arr.map((v) => <Museum km={v} key={v} />);
    return mus;
  };
  const Museums = () => {
    const mus = orderedMuseums(order);
    return <div className="museums">{mus}</div>;
  };
  const changeOrder = (e) => {
    const type = e.target.attributes.clicktype.nodeValue;
    const classList = e.target.classList;
    switch (type) {
      case "rating":
      case "closest":
        clickOrder(type);
        break;
      default:
        break;
    }
    const selectedOrder = document.querySelector(".selectedOrder");
    selectedOrder.classList.remove("selectedOrder");
    e.target.classList.add("selectedOrder");
  };

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
                    alt=""
                    onClick={clickFilter}
                  />
                </div>
              </div>
              {filter ? (
                <div className="filters">
                  <p
                    clicktype="ordina"
                    onClick={() => setOrderView((v) => (v = !v))}
                  >
                    Ordina
                  </p>
                  {orderView ? (
                    <div class="orderView">
                      <p
                        class="selectedOrder"
                        clicktype="default"
                        onClick={changeOrder}
                      >
                        Default
                      </p>
                      <p clicktype="rating" onClick={changeOrder}>
                        Più valutato
                      </p>
                      <p clicktype="closest" onClick={changeOrder}>
                        Più vicini
                      </p>
                    </div>
                  ) : (
                    <></>
                  )}
                  <p id="Storia" clicktype="category">
                    Storia
                  </p>
                  <p id="Arte" clicktype="category">
                    Arte
                  </p>
                  <p clicktype="category" id="Tecnologia">
                    Tecnologia
                  </p>
                </div>
              ) : (
                <></>
              )}
            </div>
            {order ? <Museums /> : <></>}
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
        <Footer />
      </main>
    </div>
  );
};

export default SearchMuseum;
