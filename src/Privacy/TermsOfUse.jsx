import React from "react";
import NavBar from "../home/Navbar";
import Footer from "../home/Footer";
import "../searchmuseum/styles/headerStyle.css";

class TerminiDUso extends React.Component {
  render() {
    return (
      <>
        {" "}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossOrigin="anonymous"
        />
        <NavBar />
        <div style={{ marginTop: "6rem" }}>
          <h1 style={{ marginTop: "6rem", textAlign: "center" }}>
            Termini d'Uso
          </h1>
          <p>
            Benvenuto nelnostra Sito Web ArtConnect. Prima di utilizzarla, leggi
            attentamente i seguenti Termini d'Uso.
          </p>
          <h2>1. Accettazione dei Termini</h2>
          <p>
            Utilizzando questa applicazione, accetti di essere vincolato dai
            nostri termini d'Uso.{" "}
          </p>
          <h2>2. Utilizzo dell'Applicazione</h2>
          <p>
            L'applicazione è destinata solo a scopi informativi. Non garantiamo
            l'accuratezza o la completezza delle informazioni fornite
            nell'applicazione. L'utilizzo delle informazioni presenti
            nell'applicazione è a tuo rischio.
          </p>
          <h2>3. Proprietà Intellettuale</h2>
          <p>
            Tutti i contenuti presenti nell'applicazione, come testi, grafica,
            loghi, icone e immagini, sono di proprietà esclusiva dei loro
            rispettivi proprietari.
          </p>
          <h2>4. Limitazioni di Responsabilità</h2>
          <p>
            Non siamo responsabili per eventuali danni derivanti dall'utilizzo
            dell'applicazione. Utilizzi l'applicazione a tuo rischio e pericolo.
          </p>
          <h2>5. Modifiche ai Termini d'Uso</h2>
          <p>
            Ci riserviamo il diritto di modificare questi Termini d'Uso in
            qualsiasi momento. Ti consigliamo di visitare periodicamente questa
            pagina per verificare eventuali aggiornamenti.
          </p>
          <h2>6. Contattaci</h2>
          <p>
            Se hai domande o dubbi riguardo ai Termini d'Uso, contattaci tramite
            i canali indicati nella sezione Contatti dell'applicazione.
          </p>
        </div>
        <Footer />
      </>
    );
  }
}

export default TerminiDUso;
