import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "museum-2023.firebaseapp.com",
  projectId: "museum-2023",
  storageBucket: "museum-2023.appspot.com",
  messagingSenderId: "643310035784",
  appId: "1:643310035784:web:XXXXXXXXXXXXXXXX",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();

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

  return (
    <section className="featuredEvents" style={{}}>
      <div className="featuredTitle">
        <h3>Museum</h3>
        <p>Be sure not to miss these events</p>
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
