import "./footerStyle.css";
import React from "react";
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-section">
          <div className="info">
            <div className="about-us">
              <h3>Riguardo Art Connect</h3>
              <nav>
                <p>La nostra storia</p>
                <p>Il nostro obiettivo</p>
                <p>Opportunità di carriera</p>
              </nav>
            </div>
            <div className="news-info">
              <h3>Informazioni</h3>
              <nav>
                <p>Notizie</p>
                <p>Accessibilità</p>
              </nav>
            </div>
            <div className="social">
              <h3>Seguici sui social</h3>
              <picture>
                <img src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/instagram_online_social_media-256.png" />
                <img src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/facebook_online_social_media-512.png" />
                <img src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/youtube_online_social_media-256.png" />
                <img src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/online_social_media_linked_in-256.png" />
              </picture>
            </div>
          </div>
          <div className="last-info">
            <p>2023© ArtConnect All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
