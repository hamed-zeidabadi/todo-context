import React, { useContext, useReducer } from "react";

//craete context
const themeContext = React.createContext();
const themeDispatcher = React.createContext();

//create provider
export const themeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <themeContext.Provider value={state}>
      <themeDispatcher.Provider value={dispatch}>
        {children}
      </themeDispatcher.Provider>
    </themeContext.Provider>
  );
};

//create custom hooks
export const useThemeState = () => {
  const context = useContext(themeContext);
  if (!context) {
    throw Error("must be use a themeContext");
  }
  return context;
};
export const useThemeDispatch = () => {
  const context = useContext(themeDispatcher);
  if (!context) {
    throw Error("must be use a themeDispatcher");
  }
  return context;
};
