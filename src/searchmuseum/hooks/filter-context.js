import { createContext, useState } from "react";

export const useFilter = () => {
  const [rating, setRating] = useState(false);

  const clickRating = () => {
    setRating((v) => (v = true));
  };

  const [category, setCategory] = useState("");

  const clickCategory = (catg) => {
    setCategory((v) => (v = catg));
  };

  return {
    clickRating,
    rating,
    clickCategory,
    category,
  };
};

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const { clickRating, rating, clickCategory, category } = useFilter();
  return (
    <FilterContext.Provider
      value={{ clickRating, rating, clickCategory, category }}
    >
      {children}
    </FilterContext.Provider>
  );
};
