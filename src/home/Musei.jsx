import { useEffect, useState } from "react";
<<<<<<< HEAD
import { db } from "../firebaseConfig";
=======
import app from "../login/databaseHandler";

const db = app.firestore();
const storage = app.storage();
>>>>>>> c2e64675d1a099b7e39be612e059d1a90d715e14

const Musei = () => {
  const [musei, setMusei] = useState([]);
  const immagini = [
    "https://i.ibb.co/89fvfyw/parigi-louvre-piramide.jpg",
    "https://i.ibb.co/BV4vQbc/British-Museum-from-NE-2.jpg",
    "https://i.ibb.co/bKZdzS6/visite-guidate-ai-Musei-Vaticani-1.jpg",
    "https://i.ibb.co/SVYwdVp/download.jpg",
    "https://i.ibb.co/jfmhjjb/download-1.jpg"
  ];

  useEffect(() => {
    const fetchMusei = async () => {
      const snapshot = await db.collection("Museo").get();
      const museiData = snapshot.docs.map((doc) => doc.data());
      setMusei(museiData);
    };

    fetchMusei();
  }, []);

  return (
    <section className="featuredEvents" style={{}}>
      <div className="featuredTitle">
        <h3>Musei in primo piano</h3>
        <p>Ecco i 5 musei più visitati al mondo</p>
      </div>
      <div className="featuredArtists list-group list-group-horizontal position-relative overflow-auto w-120 musei-container">
        {musei.map((museo) => (
          <div
            className="artistContainer"
            style={{
              boxSizing: "unset !important",
              width: "80rem",
              borderRadius: "4px",
              border: "1px solid",
              padding: "1rem",
            }}
            key={museo.nome}
          >
            <img
              style={{ height: "13rem" }}
              src={immagini[museo]}
              alt={museo.nome}
            />
            <div className="card-body">
              <h4 className="artistName">{museo.nome}</h4>
              <p className="artistVenue">{museo.indirizzo}</p>
              <p className="artistDate">
                Indirizzo: {museo.indirizzo}
              </p>
              <p>{museo.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Musei;
