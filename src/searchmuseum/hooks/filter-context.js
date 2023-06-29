import { createContext, useState } from "react";

export const useFilter = () => {
  //Filtro attivo/disattivo
  const [filter, setFilter] = useState(false);
  const clickFilter = () => {
    setFilter((v) => (v = !v));
  };

  //Ordine corrente
  const [order, setOrder] = useState("rating");
  const clickOrder = (order) => {
    setOrder((v) => (v = order));
  };

  //Categorie selezionate
  const [category, setCategory] = useState("");
  const clickCategory = (catg) => {
    setCategory((v) => (v = catg));
  };

  const [museums, setMuseums] = useState([10, 5, 15, 1, 3, 7]);
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
