import React, { useState, useContext, createContext } from "react";

export const useMain = () => {
  const [showinfoEmail, setShowinfoEmail] = useState(false);
  const [showInfoPassword, setShowInfoPassword] = useState(false);
  const [logged, setLogged] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [togglePass, setTogglePass] = useState(false);
  const credentials = [];

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

  const auth = (name, surname, username, email, password, status) => {
    if (status === "register") {
      credentials.push(name, surname, username, email, password);
      setLogged(true);
    } else {
      setLogged(true);
    }
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
      }}
    >
      {children}
    </FuncContext.Provider>
  );
};
