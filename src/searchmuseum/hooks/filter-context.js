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
      name: "Museo1",
      km: 10,
      category: "Storia",
      rating: 4.8,
    },
    {
      name: "Museo2",
      km: 5,
      category: "Tecnologia",
      rating: 3.2,
    },
    {
      name: "Museo3",
      km: 43,
      category: "Storia naturale",
      rating: 5,
    },
    {
      name: "Museo4",
      km: 11,
      category: "Arte",
      rating: 1.6,
    },
    {
      name: "Museo5",
      km: 3,
      category: "Arte",
      rating: 3.9,
    },
    {
      name: "Museo6",
      km: 1,
      category: "Storia",
      rating: 4.5,
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
