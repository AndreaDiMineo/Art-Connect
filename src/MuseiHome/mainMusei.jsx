import { useEffect, useState } from "react";
import { appDb } from "../firebaseConfig";

const db = appDb.firestore();

const MainFirenze = () => {
  const [musei, setMusei] = useState([]);
  console.log(musei);

  useEffect(() => {
    const fetchMusei = async () => {
      console.log(db);
      const snapshot = await db.collection("GalleriaFirenze").get();
      const museiData = snapshot.docs.map((doc) => doc.data());
      setMusei(museiData);
      console.log(museiData);
    };

    fetchMusei();
  }, []);
  console.log(musei);
  return (
    <div>
      <h1>{musei[1].titolo}</h1>
      <h3>{musei[1].sottotitolo}</h3>
      <article>
        <p>{musei[1].parg1}</p>
      </article>
      <div>
        <img src={musei[1].image1} />
      </div>
      <article>
        <p>{musei[1].parg2}</p>
      </article>
      <div>
        <img src={musei[1].image2} />
      </div>
      <article>
        <p>{musei[1].parg3}</p>
      </article>
    </div>
  );
};
export default MainFirenze;
