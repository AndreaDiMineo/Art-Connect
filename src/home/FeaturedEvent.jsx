// Musei.jsx
import React, { useEffect, useState } from "react";

const FeaturedEvent = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const artists = [
      "Kim Petras",
      "Björk",
      "Liam Gallagher",
      "Alicia Keys",
      "Drake",
      "Depeche Mode",
      "Muse",
      "aja monet",
      "Beyonce",
    ];

    const fetchEvents = async () => {
      const fetchedEvents = [];

      for (const artist of artists) {
        const encodedArtist = encodeURI(artist);
        const url = `https://rest.bandsintown.com/artists/${encodedArtist}/events?app_id=YOUR_APP_ID&date=upcoming`;

        try {
          const response = await fetch(url);
          const eventsData = await response.json();

          fetchedEvents.push(...eventsData);
        } catch (error) {
          console.error("Errore nel caricamento", error);
        }
      }

      setEvents(fetchedEvents);
    };

    fetchEvents();
  }, []);

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

  return (
    <section className="featuredEvents">
      <div className="featuredTitle">
        <h3>Featured events</h3>
        <p>Be sure not to miss these events</p>
      </div>
      <div className="featuredArtists list-group list-group-horizontal position-relative overflow-auto w-120 musei-container">
        {filteredEvents.map((event) => {
          const link = event.artist.thumb_url;
          const name = event.artist.name;
          const venue = event.venue.name;
          const eventDate = new Date(event.datetime);
          const formattedDate = formatEventDate(eventDate);

          return (
            <div
              className="artistContainer"
              style={{
                boxSizing: "unset !important",
                width: "150rem",
                borderRadius: "4px",
                border: "1px solid",
                padding: "1rem",
              }}
              key={event.id}
            >
              <div>
                {link && <img src={link} alt={name} />}
                <h4 className="artistName">{name}</h4>
              </div>
              <div>
                <p className="artistVenue">{venue}</p>
                <p className="artistDate">
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
                    <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                    <line x1={16} y1={2} x2={16} y2={6} />
                    <line x1={8} y1={2} x2={8} y2={6} />
                    <line x1={3} y1={10} x2={21} y2={10} />
                  </svg>
                  {formattedDate}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedEvent;
