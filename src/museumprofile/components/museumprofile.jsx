import "../styles/museumProfileStyle.css";
import React from "react";
import Tickets from "./tickets";
import { useState } from "react";
import Show from "./show";
import { TicketsStats } from "../../museumprofile/components/tickets";
import app from "../../database/databaseHandler";

const db = app.firestore();
const storage = app.storage();

const MuseumProfile = ({ info }) => {
  const [list, setList] = useState(false);
  const [show, setShow] = useState(false);
  const { logos, arrows } = TicketsStats();

  const mostraBiglietti = (stato) => {
    setList(stato);
    if (stato === true) {
      logos.forEach((element) => {
        element.style.top = 0;
        element.style.bottom = "-2.6rem";
      });
      arrows.forEach((element) => {
        element.style.top = "-8.5rem";
      });
    }
  };
  const mostraMostre = (stato) => {
    setShow(stato);
  };
  return (
    <div className="museum-card">
      <img className="museum-img" alt={info.name} src={info.url} />
      <div className="museum-profile">
        <div className="stats-btns">
          <div className="stats">
            <img
              className="museum_icons"
              src="https://i.ibb.co/4JWWxhz/map-pin.png"
              alt=""
            />
            <p>{parseFloat(info.km).toFixed(2)}km</p>
            <img
              className="museum_icons"
              src="https://i.ibb.co/Lh7YZq8/grid.png"
              alt=""
            />
            <p>{info.category}</p>
            <img
              className="museum_icons"
              src="https://i.ibb.co/CsM31z2/star.png"
              alt=""
            />
            <p>{info.rating}</p>
          </div>
          <div className="btns">
            {info.sitoWeb ? (
              <button
                className="museum-btn"
                class="btn btn-primary"
                onClick={window.open(info.sitoWeb)}
              >
                Sito web
              </button>
            ) : (
              <></>
            )}
            <button
              className="museum-btn"
              class="btn btn-primary"
              onClick={
                !show === true
                  ? () => mostraMostre(true)
                  : () => mostraMostre(false)
              }
            >
              Visualizza mostre
            </button>
            <button
              className="museum-btn"
              class="btn btn-primary"
              onClick={
                !list === true
                  ? () => mostraBiglietti(true)
                  : () => mostraBiglietti(false)
              }
            >
              Visualizza biglietti
            </button>
          </div>
        </div>
        <div className="museum-info">
          <h1>{info.name}</h1>
          <h3>{info.desc}</h3>
          <h3>Informazioni</h3>
          <p>
            <b>Indirizzo:</b> {info.address}
          </p>
          <p>
            <b>Orari:</b>
          </p>
          <ul>
            <li>Lunedì - Chiuso</li>
            <li>Martedì - 9:30-17:00</li>
            <li>Mercoledì - 9:30-17:00</li>
            <li>Giovedì - 9:30-17:00</li>
            <li>Venerdì - 9:30-17:00</li>
            <li>Sabato - 9:30-18:30</li>
            <li>Domenica - 9:30-18:30</li>
          </ul>
          {info.telefono ? (
            <p>
              <b>Telefono:</b> {info.tel}
            </p>
          ) : (
            <></>
          )}
        </div>
      </div>
      {!list === true ? null : <Tickets />}
      {!show === true ? null : <Show />}
    </div>
  );
};

export default MuseumProfile;
