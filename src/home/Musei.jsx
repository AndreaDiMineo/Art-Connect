import React, { useEffect, useState } from "react";

const Musei = () => {
  return (
    <section
      className="featuredEvents"
      style={{ backgroundColor: "darkslategrey" }}
    >
      <div className="featuredTitle">
        <h3>Best Musem in the world</h3>
        <p>Be sure to visit</p>
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

export default Musei;
