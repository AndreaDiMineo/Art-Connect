import "../styles/showstyle.css";
import React from "react";

export default function Show() {
  return (
    <div className="showContainer">
      <div className="container">
        <h1
          className="ShowH1
        "
        >
          Mostre contenute all'interno
        </h1>
        <div className="show">
          <a href="https://imgbb.com/">
            <img src="https://i.ibb.co/vQfNpmR/image.png" alt="mostra" />
          </a>
          <div className="desc">
            <h2 className="ShowH2">Sociocromie</h2>
            <p className="ShowP">
              Una mostra curata da Giulio Ceppi - architetto, designer e
              fondatore di Total Tool - per ripercorrere 100 anni attraverso il
              colore vivo della lingua parlata, che diventa storia e fatto
              vissuto. 25 cromotipi raccontano eventi di natura politica,
              sociale, culturale e sportiva, tra brigate rosse e black bloc,
              notte bianca e telefono azzurro, quote rosa e tute blu, green
              economy e black friday, pallone d'oro e maglia rosa, fino alle più
              recenti zone rosse.
            </p>
            <button className="btn btn-primary">Prenota</button>
            <button className="btn btn-primary">Galleria</button>
          </div>
        </div>
        <div className="show">
          <a href="https://imgbb.com/">
            <img src="https://i.ibb.co/ZB6Kryf/image.png" alt="mostra" />
          </a>
          <div className="desc">
            <h2 className="ShowH2">
              Robotic voice activated word kicking machine
            </h2>
            <p className="ShowHP">
              Scopriamo l’opera di Neil Mendoza: un'esplorazione surreale del
              linguaggio e della relazione che instauriamo quando parliamo con
              le macchine, come gli assistenti vocali basati sull’intelligenza
              artificiale. Attraverso l’installazione osserviamo in che modo le
              nostre parole vengono convertite in testo per raggiungere il mondo
              virtuale. Proviamo a seguirle dopo aver ricevuto un calcio da un
              piede robotico o essere diventate suoni e riflettiamo sul rapporto
              tra analogico e digitale, fisico e virtuale.
            </p>

            <button className="btn btn-primary">Prenota</button>
            <button className="btn btn-primary">Galleria</button>
          </div>
        </div>
      </div>
    </div>
  );
}
