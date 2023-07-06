import { useEffect, useState } from "react";
import { appDb } from "../firebaseConfig";

const dbA = appDb.firestore();

const MainFirenze = () => {
  
  const [GalleriaFirenze, setMuseiF] = useState([]);

  useEffect(() => {
    const fetchMuseiF = async () => {
      const snapshot = await dbA.collection("GalleriaFirenze").get();

      const GalleriaFirenze = snapshot.docs.map((doc) => doc.data());
      setMuseiF(GalleriaFirenze);
    };

    fetchMuseiF();
  }, []);

  return (
    <div style={{ margin: "4rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "4rem" }}>
        {GalleriaFirenze[0]?.titolo}
      </h1>
      <h3>{GalleriaFirenze[0]?.sottotitolo}</h3>
      <article>
        <p>{GalleriaFirenze[0]?.parg1}</p>
      </article>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <img src={GalleriaFirenze[0]?.image1} />
      </div>
      <article>
        <p>{GalleriaFirenze[0]?.parg2}</p>
      </article>
    <div style={{ display: "flex", justifyContent: "space-around" }}>
        <img src={GalleriaFirenze[0]?.image2} />
      </div>
      <article>
        <p>{GalleriaFirenze[0]?.parg3}</p>
      </article>
    </div>
  );
};
export default MainFirenze;
