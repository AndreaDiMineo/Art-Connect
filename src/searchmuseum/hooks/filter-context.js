import { createContext, useState } from "react";

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
      km: 10,
      category: "Arte",
      rating: 4.5,
      latitude: 45.4706206,
      longitude: 9.1783847,
    },
    {
      name: "Museo Civico di Storia Naturale di Milano",
      km: 5,
      category: "Storia naturale",
      rating: 4.4,
      latitude: 45.4727722,
      longitude: 9.2015613,
    },
    {
      name: "Museo Nazionale della Scienza e della Tecnologia Leonardo da Vinci",
      km: 43,
      category: "Scienza",
      rating: 4.5,
      latitude: 45.4627137,
      longitude: 9.1703315,
    },
    {
      name: 'Antiquarium "Alda Levi"',
      km: 11,
      category: "Storia",
      rating: 4.2,
      latitude: 45.4578203,
      longitude: 9.1792501,
    },
    {
      name: "Museo Bagatti Valsecchi",
      km: 3,
      category: "Arte",
      rating: 4.7,
      latitude: 45.4694746,
      longitude: 9.1948634,
    },
    {
      name: "Museo del Risorgimento",
      km: 1,
      category: "Storia",
      rating: 4.4,
      latitude: 45.4722222,
      longitude: 9.1891267,
    },
  ];
  const [museums, setMuseums] = useState(testMuseums);
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
