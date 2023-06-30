import FeauturedEvent from "./FeaturedEvent";
import "./styleHome.css";
import React from "react";
const Home = () => {
  return (
    <React.Fragment>
      <div className="top">
        <nav>
          <div className="navLeft">
            <picture>
              <img
                className="logoArtConnect"
                src="https://i.ibb.co/wdypwpy/unnamed.png"
              />
            </picture>
            <ul className="navList">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className="navRight"></div>
        </nav>
        <span className="xMenuMobile none">X</span>
        <header style={{ color: "black" }}>
          <p className="text--uppercase">All the fun start here</p>
          <h1>Book your Tickets</h1>
          <h1>For Event and Musei!</h1>
        </header>
      </div>
      <main>
        <section className="upcomingSection">
          <h3>Search upcoming Events or Musei</h3>
          <div className="input-group input-group-lg">
            <input
              className="form-control"
              type="text"
              placeholder="Search events,musei, artists, venues, festivals"
            />
          </div>
        </section>
        <FeauturedEvent />
        <section className="trendingSection">
          <div className="trendingTitle">
            <h3>Best Musei in your Town</h3>
          </div>
          <div className="genres"></div>
        </section>
      </main>
    </React.Fragment>
  );
};
export default Home;
