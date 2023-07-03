import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";

const Musei = () => {
  const [musei, setMusei] = useState([]);
  useEffect(() => {
    const fetchMusei = async () => {
      const snapshot = await db.collection("musei").get();
      const museiData = snapshot.docs.map((doc) => doc.data());
      setMusei(museiData);
    };
    fetchMusei();
  }, []);
  console.log(musei);
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
              src={museo.image}
              alt={museo.nome}
            />
            <div className="card-body">
              <h4 className="artistName">{museo.nome}</h4>
              <p className="artistVenue">{museo.Citta}</p>
              <p className="artistDate">
                Anno di costruzione: {museo.annoCostruzione}
              </p>
              <p>{museo.descrizione}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Musei;
