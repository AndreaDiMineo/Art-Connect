import { useEffect, useState } from "react";
import { appDb } from "../firebaseConfig";

const db = appDb.firestore();

const MuseiFirenze = () => {
  const [musei, setMusei] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const fetchMusei = async () => {
      const snapshot = await db.collection("imageFirenze").get();
      const museiData = snapshot.docs.map((doc) => doc.data());
      setMusei(museiData);
    };

    fetchMusei(musei);
  }, []);

  const goToPreviousImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + musei.length) % musei.length
    );
  };

  const goToNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % musei.length);
  };

  const goToCurrentImage = (index) => {
    setCurrentImage(index);
  };

  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ marginTop: "6rem" }}
      >
        <div className="carousel-indicators">
          {musei.map((museo, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === currentImage ? "active" : ""}
              aria-current={index === currentImage ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
              onClick={() => goToCurrentImage(index)}
            />
          ))}
        </div>
        <div className="carousel-inner">
          {musei.map((museo, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === currentImage ? "active" : ""
              }`}
            >
              <img src={museo.image} className="d-block w-100" alt="..." />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
          onClick={goToPreviousImage}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
          onClick={goToNextImage}
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default MuseiFirenze;
