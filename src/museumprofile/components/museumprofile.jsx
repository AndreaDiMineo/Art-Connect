import "../styles/museumProfileStyle.css";
import React from "react";
import { FilterContext } from "../../searchmuseum/hooks/filter-context";
import { useContext } from "react";
import Tickets from "./tickets";
import { useState } from "react";
import Show from "./show";

const MuseumProfile = () => {
    const { rating, category } = useContext(FilterContext);
    const [list, setList] = useState(false);
    const [show, setShow] = useState(false);

    const mostraBiglietti = (stato) => {
        setList(stato)
    }
    const mostraMostre = (stato) => {
        setShow(stato)
    }
    return(
        <div className="museum-card">
            <img
            className="museum-img"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Field_Museum_of_Natural_History.jpg/1280px-Field_Museum_of_Natural_History.jpg"
            />
            <div className="museum-profile">
                <div className="stats-btns">
                    <div className="stats">
                        <img
                        className="museum_icons"
                        src="https://i.ibb.co/4JWWxhz/map-pin.png"
                        alt=""
                        />
                        <p>4km</p>
                        <img
                        className="museum_icons"
                        src="https://i.ibb.co/Lh7YZq8/grid.png"
                        alt=""
                        />
                        <p>{!category ? "Storia" : "Arte"}</p>
                        <img
                            className="museum_icons"
                            src="https://i.ibb.co/CsM31z2/star.png"
                            alt=""
                        />
                        <p>{!rating ? 4.0 : 5.0}</p>
                    </div>
                    <div className="btns">
                        <button className="museum-btn">Sito web</button>
                        <button className="museum-btn">Visualizza mostre</button>
                        <button className="museum-btn" onClick={!list === true ? () => mostraBiglietti(true) : () => mostraBiglietti(false)}>Visualizza biglietti</button>
                    </div>
                </div>
                <div className="museum-info">
                    <h1>Museo Civico di Storia Naturale</h1>
                    <h3>Descrizione</h3>
                    <h3>Informazioni</h3>
                    <p><b>Indirizzo:</b> Via San Vittore, 21, 20123, Milano</p>
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
                    <p><b>Telefono:</b> 02485551</p>
                </div>
            </div>
            {!list === true ? null : <Tickets/>}
            {!show === true ? null : <Show/>}
        </div>
    )
}

export default MuseumProfile;
