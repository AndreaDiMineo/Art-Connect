import { useEffect, useState } from "react";
import { db as dbFirenze } from "../firebaseConfig";

const MuseiFirenze = () => {
  const [musei, setMusei] = useState([]);

  useEffect(() => {
    const fetchMusei = async () => {
      const snapshot = await dbFirenze.collection("imageFirenze").get();
      const museiData = snapshot.docs.map((doc) => doc.data());
      setMusei(museiData);
    };

    fetchMusei();
  }, []);

  console.log(musei[2] && musei[2].image);

  return (
    <>
      {/* Carousel wrapper */}
      <div
        id="carouselBasicExample"
        className="carousel slide carousel-fade"
        data-mdb-ride="carousel"
      >
        {/* Indicators */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        {/* Inner */}
        <div className="carousel-inner">
          {/* Single item */}
          <div className="carousel-item active">
            {musei[1] && musei[1].image ? (
              <img
                src={musei[1].image}
                className="d-block w-100"
                alt="Sunset Over the City"
              />
            ) : (
              <div>No image available</div>
            )}
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
          {/* Single item */}
          <div className="carousel-item">
            {musei[2] && musei[2].image ? (
              <img
                src={musei[2].image}
                className="d-block w-100"
                alt="Sunset Over the City"
              />
            ) : (
              <div>No image available</div>
            )}
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          {/* Single item */}
          <div className="carousel-item">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp"
              className="d-block w-100"
              alt="Cliff Above a Stormy Sea"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </div>
        </div>
        {/* Inner */}
        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Carousel wrapper */}
    </>
  );
};
export default MuseiFirenze;
