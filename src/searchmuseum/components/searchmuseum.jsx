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
  const {
    filter,
    clickFilter,
    order,
    clickOrder,
    category,
    clickCategory,
    museums,
  } = useContext(FilterContext);
  const [orderView, setOrderView] = useState(false);
  const [categoryView, setCategoryView] = useState(false);

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
    switch (id) {
      case "default":
      case "rating":
      case "closest":
        clickOrder(id);
        break;
      default:
        break;
    }
    const selectedOrder = document.querySelector(".selectedOrder");
    selectedOrder.classList.remove("selectedOrder");
    classList.add("selectedOrder");
  };

  //Categorie
  const filterMuseums = (museums, category) => {
    return category === "all"
      ? museums
      : museums.filter((v) => v.category.toLowerCase() === category);
  };
  const changeCategory = (e) => {
    const id = e.target.id;
    const classList = e.target.classList;
    switch (id) {
      case "storia":
      case "arte":
      case "tecnologia":
      case "all":
        clickCategory(id);
        break;
      default:
        break;
    }
    const selectedCategory = document.querySelector(".selectedCategory");
    selectedCategory.classList.remove("selectedCategory");
    classList.add("selectedCategory");
  };

  //Aggiorna i musei
  const Museums = () => {
    console.log("UPDATE " + order + "   " + category);
    const mus = orderMuseums(filterMuseums(museums, category), order);
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
                    <div class="orderView">
                      <p
                        class="selectedOrder"
                        id="default"
                        onClick={changeOrder}
                      >
                        Default
                      </p>
                      <p id="rating" onClick={changeOrder}>
                        Più valutato
                      </p>
                      <p id="closest" onClick={changeOrder}>
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
                    <div class="filterView">
                      <p
                        class="selectedCategory"
                        id="all"
                        onClick={changeCategory}
                      >
                        Tutte
                      </p>
                      <p id="storia" onClick={changeCategory}>
                        Storia
                      </p>
                      <p id="arte" onClick={changeCategory}>
                        Arte
                      </p>
                      <p id="tecnologia" onClick={changeCategory}>
                        Tecnologia
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
            {order || category ? <Museums /> : <></>}
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
