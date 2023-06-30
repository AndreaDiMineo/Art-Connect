import React, { useEffect, useState } from "react";

const FeauturedEvent = () => {
  const [artists, setArtists] = useState([
    "Maroon 5",
    "Anderson .Paak",
    "Florence and the Machine",
    "M83",
  ]);
  const [arrDivArtist, setArrDivArtist] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const divArtist = document.querySelectorAll(".artist");
      const arrDivArtist = Array.from(divArtist);

      for (let i = 0; i < arrDivArtist.length; i++) {
        if (artists.length <= i) break;
        const a = artists[i];
        const d = arrDivArtist[i];
        const response = await fetch(
          `https://rest.bandsintown.com/artists/${encodeURI(a)}?app_id=1234`
        );
        const jsonData = await response.json();
        const responseEvent = await fetch(
          `https://rest.bandsintown.com/artists/${encodeURI(
            a
          )}/events?app_id=1234&date=upcoming`
        );
        const jsonDataEvent = await responseEvent.json();

        if (jsonData.name !== undefined) {
          const img = d.querySelector("img");
          const name = d.querySelector(".artistName");
          img.src = jsonData.thumb_url;
          name.innerHTML = jsonData.name;

          if (jsonDataEvent.length > 0) {
            const venue = d.querySelector(".artistVenue");
            const date = d.querySelector(".artistDate");
            const venueText =
              jsonDataEvent[0].venue.city + ", " + jsonDataEvent[0].venue.name;
            venue.innerHTML = venueText;

            const dt = new Date(jsonDataEvent[0].datetime);
            const options = {
              month: "long",
              day: "numeric",
            };
            const options2 = { hour: "numeric", minute: "numeric" };
            date.innerHTML +=
              Intl.DateTimeFormat("en-us", options).format(dt) +
              " - " +
              Intl.DateTimeFormat("en-us", options2).format(dt);
            console.log(Intl.DateTimeFormat("en-us", options).format(dt));
          }
        }
      }
    };

    fetchData();
  }, [artists]);

  return (
    <section className="featuredEvents">
      <div className="featuredTitle">
        <h3>Featured events</h3>
        <p>Be sure not to miss these events</p>
      </div>
      <div className="featuredArtists">
        <div className="artist">
          <div>
            <img />
            <h4 className="artistName" />
          </div>
          <div>
            <p className="artistVenue" />
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
            </p>
          </div>
        </div>
        <div className="artist">
          <div>
            <img />
            <h4 className="artistName" />
          </div>
          <div>
            <p className="artistVenue" />
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
            </p>
          </div>
        </div>
        <div className="artist">
          <div>
            <img />
            <h4 className="artistName" />
          </div>
          <div>
            <p className="artistVenue" />
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
            </p>
          </div>
        </div>
        <div className="artist">
          <div>
            <img />
            <h4 className="artistName" />
          </div>
          <div>
            <p className="artistVenue" />
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
            </p>
          </div>
        </div>
      </div>
      <div>
        <button className="btn btn-outline-light">See more events</button>
      </div>
    </section>
  );
};

export default FeauturedEvent;
