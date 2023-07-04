import { createContext, useState } from "react";
import React from "react";
import app from "../../database/databaseHandler";

const db = app.firestore();
const storage = app.storage();

export const useFilter = () => {
  //Filtro attivo/disattivo
  const [filter, setFilter] = useState(false);
  const clickFilter = () => {
    setFilter((v) => (v = !v));
  };

  //Ordine corrente
  const [order, setOrder] = useState("default");
  const clickOrder = (order) => {
    setOrder((v) => (v = order));
  };

  //Categoria selezionata
  const [category, setCategory] = useState("all");
  const clickCategory = (catg) => {
    setCategory((v) => (v = catg));
  };

  //Lista musei
  const testMuseums = [
    {
      name: "Museo d’Arte Antica",
      category: "Arte",
      rating: 4.5,
      latitude: 45.4706206,
      longitude: 9.1783847,
      address: "Piazza Castello, 20121 Milano MI",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Field_Museum_of_Natural_History.jpg/1280px-Field_Museum_of_Natural_History.jpg",
    },
    {
      name: "Museo Civico di Storia Naturale di Milano",
      category: "Storia naturale",
      rating: 4.4,
      latitude: 45.4727722,
      longitude: 9.2015613,
      address: "Corso Venezia, 55, 20121 Milano MI",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Field_Museum_of_Natural_History.jpg/1280px-Field_Museum_of_Natural_History.jpg",
    },
    {
      name: "Museo Nazionale della Scienza e della Tecnologia Leonardo da Vinci",
      category: "Scienza",
      rating: 4.5,
      latitude: 45.4627137,
      longitude: 9.1703315,
      address: "Via San Vittore, 21, 20123 Milano MI",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Field_Museum_of_Natural_History.jpg/1280px-Field_Museum_of_Natural_History.jpg",
    },
    {
      name: 'Antiquarium "Alda Levi"',
      category: "Storia",
      rating: 4.2,
      latitude: 45.4578203,
      longitude: 9.1792501,
      address: "Via Edmondo de Amicis, 17, 20123 Milano MI",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Field_Museum_of_Natural_History.jpg/1280px-Field_Museum_of_Natural_History.jpg",
    },
    {
      name: "Museo Bagatti Valsecchi",
      category: "Arte",
      rating: 4.7,
      latitude: 45.4694746,
      longitude: 9.1948634,
      address: "Via Gesù, 5, 20121 Milano MI",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Field_Museum_of_Natural_History.jpg/1280px-Field_Museum_of_Natural_History.jpg",
    },
    {
      name: "Museo del Risorgimento",
      category: "Storia",
      rating: 4.4,
      latitude: 45.4722222,
      longitude: 9.1891267,
      address: "Via Borgonuovo, 23, 20121 Milano MI",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Field_Museum_of_Natural_History.jpg/1280px-Field_Museum_of_Natural_History.jpg",
    },
  ];
  const [museums, setMuseums] = useState(testMuseums);

  //Ottiene dati del museo dal database
  /*const fetchInfo = async () => {
    const snapshot = await db.collection("Museo").get();
    const museiData = snapshot.docs.map((doc) => doc.data());
    setMuseums(museiData);
  };
  fetchInfo();*/
  return {
    clickFilter,
    filter,
    clickOrder,
    order,
    clickCategory,
    category,
    museums,
    setMuseums,
  };
};

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const {
    clickFilter,
    filter,
    clickOrder,
    order,
    clickCategory,
    category,
    museums,
    setMuseums,
  } = useFilter();
  return (
    <FilterContext.Provider
      value={{
        clickFilter,
        filter,
        clickOrder,
        order,
        clickCategory,
        category,
        museums,
        setMuseums,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
