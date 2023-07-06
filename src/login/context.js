import React, { useState, useContext, createContext } from "react";
import app from "../database/databaseHandler";

const db = app.firestore();

export const useMain = () => {
  const [showinfoEmail, setShowinfoEmail] = useState(false);
  const [showInfoPassword, setShowInfoPassword] = useState(false);
  const [logged, setLogged] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [togglePass, setTogglePass] = useState(false);
  const [credentials, setCredentials] = useState({});

  const [musei, setMusei] = useState([]);

  const fetchMusei = async () => {
    const snapshot = await db.collection("musei").get();
    const museiData = snapshot.docs.map((doc) => doc.data());
    console.log(museiData);
    setMusei(museiData);
  };

  const validatePassword = (password) => {
    const regex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/;
    return regex.test(password);
  };

  const passwordInfo = () => {
    setShowInfoPassword(true);
  };
  const passwordNascondi = () => {
    setShowInfoPassword(false);
  };

  const register = () => {
    if (toggle) setToggle(false);
    else setToggle(true);
  };

  const Forget = () => {
    if (togglePass) setTogglePass(false);
    else setTogglePass(true);
  };

  const auth = (name, surname, username, email, password) => {
    setCredentials({name, surname, username, email, password});
    setLogged(true);
  };

  return {
    toggle,
    auth,
    logged,
    credentials,
    register,
    passwordNascondi,
    passwordInfo,
    validatePassword,
    showInfoPassword,
    togglePass,
    Forget,
    setLogged,
  };
};

export const FuncContext = createContext();

export const FuncProvider = ({ children }) => {
  const {
    toggle,
    auth,
    logged,
    credentials,
    register,
    passwordNascondi,
    passwordInfo,
    validatePassword,
    showInfoPassword,
    togglePass,
    Forget,
    setLogged,
  } = useMain();
  return (
    <FuncContext.Provider
      value={{
        toggle,
        auth,
        logged,
        credentials,
        register,
        passwordNascondi,
        passwordInfo,
        validatePassword,
        showInfoPassword,
        togglePass,
        Forget,
        setLogged,
      }}
    >
      {children}
    </FuncContext.Provider>
  );
};
