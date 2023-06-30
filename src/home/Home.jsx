import FeauturedEvent from "./FeaturedEvent";
import "./styleHome.css";
import React from "react";

import NavBar from "./Navbar";
import Musei from "./Musei";
import Footer from "./Footer";
const Home = () => {
  return (
    <React.Fragment>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossorigin="anonymous"
      />
      <div className="home">
        <div className="top">
          <NavBar />
          <header className="headerHome" style={{ color: "black" }}>
            <p className="text--uppercase">All the fun start here</p>
            <h1>Book your Tickets</h1>
            <h1>For Event and Musei!</h1>
          </header>
        </div>
        <main>
          <FeauturedEvent />
          <Musei />
        </main>
      </div>
      <Footer />
    </React.Fragment>
  );
};
export default Home;
