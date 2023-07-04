import React, { useContext, useState, useRef } from "react";
import Navbar from "./Navbar";
import "../searchmuseum/styles/searchmuseumStyle.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { Map, Marker, NavigationControl } from "react-map-gl";
import { ViewContext } from "../searchmuseum/hooks/view-context";
import { FilterContext } from "../searchmuseum/hooks/filter-context";
import Footer from "./Footer";
import { FuncContext } from "../login/context";
import Tickets from "../museumprofile/components/tickets";

const SearchEvents = () => {
  const [events, setEvents] = useState([]);

  const formatEventDate = (date) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const hour = date.getHours() % 12;
    const period = date.getHours() < 12 ? "am" : "pm";

    return `${month} ${day} - ${hour}${period}`;
  };

  const filteredEvents = events.filter((event) => event.artist?.thumb_url);

  const showEvents = async (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      const ricerca = e.target.value;
      const ris = [];
      if (ricerca !== "") {
        const encodedArtist = encodeURI(ricerca);
        const url = `https://rest.bandsintown.com/artists/${encodedArtist}/events?app_id=YOUR_APP_ID&date=upcoming`;

        try {
          const response = await fetch(url);
          const eventsData = await response.json();

          if (eventsData.length !== 0) ris.push(...eventsData);
          else alert("Nessun risultato trovato");
        } catch (error) {
          alert("Nessun risultato trovato");
          console.error("Errore nel caricamento", error);
        }
        setEvents(ris);
      }
    }
  };

  const MAPBOX_TOKEN =
    "pk.eyJ1IjoiYWRlcGVkcmluaSIsImEiOiJjbGlrMzd2dWEwZWI5M2trZG5wem04eWV5In0.xku2He5nmX0r89rngZndlQ";

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
    updateEvents(lng, lat);
  };
  const calculateDistance = (lng1, lat1, lng2, lat2) => {
    return Math.sqrt(Math.pow(lng2 - lng1, 2) + Math.pow(lat2 - lat1, 2)) * 100;
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(getCoordsLocation);
  };
  const getCoordsLocation = (pos) => {
    setCenter(pos.coords.longitude, pos.coords.latitude);
  };

  const Geocoding = async (ricerca) => {
    const API = "https://geocode.maps.co/search?q=" + encodeURI(ricerca);
    try {
      const response = await fetch(API);
      const eventsData = await response.json();
      if (eventsData !== "") {
        setCenter(eventsData[0].lon, eventsData[0].lat);
      } else {
        alert("Nessun risultato trovato");
      }
    } catch (error) {
      console.error("Errore nel caricamento", error);
    }
  };

  const { museums, setMuseums } = useContext(FilterContext);

  const updateEvents = (lng, lat) => {
    setMuseums(
      museums.map((v) => {
        v.km = calculateDistance(v.longitude, v.latitude, lng, lat);
        return {
          ...v,
        };
      })
    );
  };

  const [state, setState] = useState(false);

  const prenotaBiglietti = () => {
    const main = document.querySelector(".rootSearchEvent");
    const mapSection = document.querySelector(".mainRight");
    const card = document.querySelector(".events");
    setState(true);
    main.addEventListener("click", () => {
      setState(false);
      main.style.backgroundColor = "";
      mapSection.style.display = "block";
    });
    if (state === true) {
      card.style.position = "relative";
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
    <div className="rootSearchEvent">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossorigin="anonymous"
      />
      <Navbar />
      <main className="pageSearchEvent">
        <h1 className="titleSearchEvent">Cosa vuoi vedere?</h1>
        <section className="mainSearchEvent">
          <div className="mainLeft">
            <div className="geo">
              <div className="search">
                <div className="geoInput">
                  <input
                    id="geoInput_input"
                    className="geoInput_input"
                    placeholder="Inserire la tua città o un evento specifico"
                    onKeyUp={showEvents}
                  />
                  <img
                    className="mapPinEvents"
                    src="https://i.ibb.co/4JWWxhz/map-pin.png"
                    alt=""
                    onClick={getLocation}
                  />
                </div>
              </div>
            </div>
            <section className="events">
              <div className="featuredArtists list-group list-group-horizontal position-relative overflow-auto w-120 musei-container">
                {filteredEvents.map((event) => {
                  const link = event.artist.thumb_url;
                  const name = event.artist.name;
                  const venue = event.venue.name;
                  const city = event.venue.city;
                  const eventDate = new Date(event.datetime);
                  const formattedDate = formatEventDate(eventDate);
                  Geocoding(city);

                  return (
                    <div
                      className="artistContainer"
                      style={{
                        boxSizing: "unset !important",
                        borderRadius: "4px",
                        border: "1px solid",
                        padding: "1rem",
                      }}
                      key={event.id}
                    >
                      <div>
                        {link && <img src={link} alt={name} />}
                        <h4 className="eventName">{name}</h4>
                      </div>
                      <div>
                        <p className="eventVenue">{venue}</p>
                        <p className="eventDate">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-calendar"
                          >
                            <rect
                              x={3}
                              y={4}
                              width={18}
                              height={18}
                              rx={2}
                              ry={2}
                            />
                            <line x1={16} y1={2} x2={16} y2={6} />
                            <line x1={8} y1={2} x2={8} y2={6} />
                            <line x1={3} y1={10} x2={21} y2={10} />
                          </svg>
                          {formattedDate}
                        </p>
                      </div>
                      <div>
                        <button
                          className="prenota-btn"
                          class="btn btn-secondary"
                          onClick={prenotaBiglietti}
                        >
                          Prenota biglietti
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
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
        {!state === true ? null : <Tickets />}
      </main>
      <Footer />
    </div>
  );
};

export default SearchEvents;
