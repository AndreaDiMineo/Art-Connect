import "../styles/searchmuseumStyle.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import Header from "./header";
import { Map, Marker, NavigationControl } from "react-map-gl";
import { useState, useContext, useRef } from "react";
import { ViewContext } from "../hooks/view-context";
import { FilterContext } from "../hooks/filter-context";
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
    updateMuseums(lng, lat);
  };
  const calculateDistance = (lng1, lat1, lng2, lat2) => {
    return Math.sqrt(Math.pow(lng2 - lng1, 2) + Math.pow(lat2 - lat1, 2)) * 100;
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
        if (json !== "") {
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
  const {
    filter,
    clickFilter,
    order,
    clickOrder,
    category,
    clickCategory,
    museums,
    setMuseums,
  } = useContext(FilterContext);
  const [orderView, setOrderView] = useState(false);
  const [categoryView, setCategoryView] = useState(false);
  const [filteredMuseums, setFilteredMuseums] = useState([...museums]);

  //Ordina musei
  const orderMuseums = (museum, order) => {
    let arr = museum;
    switch (order) {
      case "rating":
        arr = museum.toSorted((a, b) => {
          return b.rating - a.rating;
        });
        break;
      case "closest":
        arr = museum.toSorted((a, b) => {
          return a.km - b.km;
        });
        break;
      default:
        break;
    }
    return arr;
  };
  const changeOrder = (e) => {
    const id = e.target.id;
    const classList = e.target.classList;
    clickOrder(id);
    const selectedOrder = document.querySelector(".selectedOrder");
    selectedOrder.classList.remove("selectedOrder");
    classList.add("selectedOrder");
  };

  //Categorie
  const filterMuseums = (museums, category) => {
    const filter =
      category === "all" || category === undefined
        ? museums
        : museums.filter((v) => v.category.toLowerCase() === category);
    setFilteredMuseums([...filter]);
  };
  const changeCategory = (e) => {
    const id = e.target.id;
    const classList = e.target.classList;
    clickCategory(id);
    filterMuseums(museums, id);
    const selectedCategory = document.querySelector(".selectedCategory");
    selectedCategory.classList.remove("selectedCategory");
    classList.add("selectedCategory");
  };

  //Aggiorna i musei
  const Museums = () => {
    const mus = orderMuseums(filteredMuseums, order);
    if (museums[0].km === undefined) {
      updateMuseums(marker.longitude, marker.latitude);
    }
    return (
      <div className="museums">
        {mus.map((v) => (
          <Museum
            name={v.name}
            km={v.km}
            category={v.category}
            rating={v.rating}
            key={v.name}
          />
        ))}
      </div>
    );
  };
  const MarkerMuseum = () => {
    return (
      <div>
        {filteredMuseums.map((v) => (
          <Marker
            longitude={v.longitude}
            latitude={v.latitude}
            color="blue"
            onClick={() => alert(v.name)}
          />
        ))}
      </div>
    );
  };
  const updateMuseums = (lng, lat) => {
    setMuseums(
      museums.map((v) => {
        v.km = calculateDistance(v.longitude, v.latitude, lng, lat);
        return {
          ...v,
        };
      })
    );
    setFilteredMuseums(
      filteredMuseums.map((v) => {
        v.km = calculateDistance(v.longitude, v.latitude, lng, lat);
        return {
          ...v,
        };
      })
    );
  };

  //HTML
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
                  <p onClick={() => setOrderView((v) => (v = !v))}>Ordina</p>
                  {orderView ? (
                    <div className="orderView">
                      <p
                        className={"default" === order ? "selectedOrder" : ""}
                        id="default"
                        onClick={changeOrder}
                      >
                        Default
                      </p>
                      <p
                        className={"rating" === order ? "selectedOrder" : ""}
                        id="rating"
                        onClick={changeOrder}
                      >
                        Più valutato
                      </p>
                      <p
                        className={"closest" === order ? "selectedOrder" : ""}
                        id="closest"
                        onClick={changeOrder}
                      >
                        Più vicini
                      </p>
                    </div>
                  ) : (
                    <></>
                  )}
                  <p onClick={() => setCategoryView((v) => (v = !v))}>
                    Categoria
                  </p>
                  {categoryView ? (
                    <div className="filterView">
                      <p
                        className={"all" === category ? "selectedCategory" : ""}
                        id="all"
                        onClick={changeCategory}
                      >
                        Tutte
                      </p>
                      <p
                        className={
                          "storia" === category ? "selectedCategory" : ""
                        }
                        id="storia"
                        onClick={changeCategory}
                      >
                        Storia
                      </p>
                      <p
                        className={
                          "arte" === category ? "selectedCategory" : ""
                        }
                        id="arte"
                        onClick={changeCategory}
                      >
                        Arte
                      </p>
                      <p
                        className={
                          "scienza" === category ? "selectedCategory" : ""
                        }
                        id="scienza"
                        onClick={changeCategory}
                      >
                        Scienza
                      </p>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              ) : (
                <></>
              )}
            </div>
            <Museums />
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
              <MarkerMuseum />
            </Map>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default SearchMuseum;
