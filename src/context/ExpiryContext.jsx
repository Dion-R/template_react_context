import React, { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/ExpiryReducer";

const ExpiryContext = createContext();
const initalState = {};

const ExpiryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);

  return (
    <ExpiryContext.Provider value={{ name: "Dion" }}>
      {children}
    </ExpiryContext.Provider>
  );
};

const useExpiryContext = () => useContext(ExpiryContext);

export { ExpiryProvider, useExpiryContext };
