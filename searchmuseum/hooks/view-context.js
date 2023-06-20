import { useState, createContext } from "react";

export const useView = (
  initialValue = {
    longitude: 9.22,
    latitude: 45.45,
    zoom: 12,
  }
) => {
  const [view, setViewState] = useState(initialValue);
  const setView = (p_lng, p_lat) => {
    setViewState((v) => {
      const { longitude, latitude } = { ...v };
      const lng = Math.abs(p_lng) <= 180 ? p_lng : longitude;
      const lat = Math.abs(p_lat) <= 85 ? p_lat : latitude;
      return {
        longitude: lng,
        latitude: lat,
        zoom: 12,
      };
    });
  };
  return { view, setView, setViewState };
};

export const ViewContext = createContext();

export const ViewProvider = ({ children }) => {
  const { view, setView, setViewState } = useView();
  return (
    <ViewContext.Provider value={{ view, setView, setViewState }}>
      {children}
    </ViewContext.Provider>
  );
};
