import { createContext, useState } from "react";

export const useFilter = () => {
  const [rating, setRating] = useState(false);

  const clickRating = () => {
    setRating((v) => (v = !v));
  };

  const [category, setCategory] = useState("");

  const clickCategory = (catg) => {
    setCategory((v) => (v = catg));
  };

  const [museums, setMuseums] = useState([10, 5, 15, 1, 3, 7]);
  return {
    clickRating,
    rating,
    clickCategory,
    category,
    museums,
    setMuseums,
  };
};

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const { clickRating, rating, clickCategory, category, museums, setMuseums } =
    useFilter();
  return (
    <FilterContext.Provider
      value={{
        clickRating,
        rating,
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
