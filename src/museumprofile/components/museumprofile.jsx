import "../styles/museumProfileStyle.css";
import React from "react";
import Tickets from "./tickets";
import { useState } from "react";
import Show from "./show";
import { TicketsStats } from "../../museumprofile/components/tickets";
import app from "../../database/databaseHandler";

const db = app.firestore();
const storage = app.storage();

const MuseumProfile = ({ data, km, category, rating }) => {
    const [list, setList] = useState(false);
    const [show, setShow] = useState(false);
    const { logos, arrows } = TicketsStats();

    const mostraBiglietti = (stato) => {
        setList(stato)
        if (stato === true) {
            logos.forEach((element) => {
                element.style.top = 0;
                element.style.bottom = "-2.6rem";
              })
              arrows.forEach((element) => {
                element.style.top = "-8.5rem";
              })
        }
    }
    const mostraMostre = (stato) => {
        setShow(stato)
    }
    return(
        <div className="museum-card">
            <img
            className="museum-img"
            src={data.url}
            />
            <div className="museum-profile">
                <div className="stats-btns">
                    <div className="stats">
                        <img
                        className="museum_icons"
                        src="https://i.ibb.co/4JWWxhz/map-pin.png"
                        alt=""
                        />
                        <p>{parseFloat(km).toFixed(2)}km</p>
                        <img
                        className="museum_icons"
                        src="https://i.ibb.co/Lh7YZq8/grid.png"
                        alt=""
                        />
                        <p>{category}</p>
                        <img
                            className="museum_icons"
                            src="https://i.ibb.co/CsM31z2/star.png"
                            alt=""
                        />
                        <p>{rating}</p>
                    </div>
                    <div className="btns">
                        <button className="museum-btn" class="btn btn-primary">Sito web</button>
                        <button className="museum-btn" class="btn btn-primary" onClick={!show === true ? () => mostraMostre(true) : () => mostraMostre(false)}>Visualizza mostre</button>
                        <button className="museum-btn" class="btn btn-primary" onClick={!list === true ? () => mostraBiglietti(true) : () => mostraBiglietti(false)}>Visualizza biglietti</button>
                    </div>
                </div>
                <div className="museum-info">
                    <h1>{data.nome}</h1>
                    <h3>{data.desc}</h3>
                    <h3>Informazioni</h3>
                    <p><b>Indirizzo:</b> {data.indirizzo}o</p>
                    <p><b>Orari:</b></p>
                    <ul>
                        <li>Lunedì - Chiuso</li>
                        <li>Martedì - 9:30-17:00</li>
                        <li>Mercoledì - 9:30-17:00</li>
                        <li>Giovedì - 9:30-17:00</li>
                        <li>Venerdì - 9:30-17:00</li>
                        <li>Sabato - 9:30-18:30</li>
                        <li>Domenica - 9:30-18:30</li>
                    </ul>
                    <p><b>Telefono:</b> {data.telefono}</p>
                </div>
            </div>
            {!list === true ? null : <Tickets/>}
            {!show === true ? null : <Show/>}
        </div>
    )
}

export default MuseumProfile;
