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

  const [closest, setClosest] = useState(false);

  const clickClosest = () => {
    setClosest((v) => (v = !v));
  };

  return {
    clickRating,
    rating,
    clickCategory,
    category,
    clickClosest,
    closest,
  };
};

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const {
    clickRating,
    rating,
    clickCategory,
    category,
    clickClosest,
    closest,
  } = useFilter();
  return (
    <FilterContext.Provider
      value={{
        clickRating,
        rating,
        clickCategory,
        category,
        clickClosest,
        closest,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
