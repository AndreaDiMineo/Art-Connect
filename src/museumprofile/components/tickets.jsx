import "../styles/ticketsStyle.css";
import React from "react";
const Tickets = () => {
  return (
    <div className="tickets-list">
      <h3>Biglietti per questo ingresso</h3>
      <div className="prices-list">
        <div className="row">
          <div className="column">
            <img
              className="provider-logo"
              src="https://i.ibb.co/CbJbVZc/image.png"
            />
            <h4>Sito ufficiale</h4>
            <p>10,00€</p>
            <img className="arrow" src="https://i.ibb.co/spfwStP/image.png" />
            <img
              className="provider-logo"
              src="https://i.ibb.co/znPs8rR/musement.png"
            />
            <div className="provider-desc">
              <h4>Musement</h4>
              <span>Salta la fila</span>
            </div>
            <p>10,00€</p>
            <img className="arrow" src="https://i.ibb.co/spfwStP/image.png" />
            <img
              className="provider-logo"
              src="https://i.ibb.co/crjbpGw/civitatis.png"
            />
            <div className="provider-desc">
              <h4>Civitatis</h4>
              <span>Cancellazione gratuita - Salta la fila</span>
            </div>
            <p>10,00€</p>
            <img className="arrow" src="https://i.ibb.co/spfwStP/image.png" />
            <img
              className="provider-logo"
              src="https://i.ibb.co/Lvjx1th/tiqets.png"
            />
            <div className="provider-desc">
              <h4>Tiqets</h4>
              <span>Cancellazione gratuita - Conferma immediata</span>
            </div>
            <p>10,00€</p>
            <img className="arrow" src="https://i.ibb.co/spfwStP/image.png" />
            <img
              className="provider-logo"
              src="https://res.cloudinary.com/fever/image/upload/web/fever-logo-dark.png"
            />
            <div className="provider-desc">
              <h4>Fever</h4>
              <span>Conferma immediata - Biglietto sul cellulare</span>
            </div>
            <p>10,00€</p>
            <img className="arrow" src="https://i.ibb.co/spfwStP/image.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
