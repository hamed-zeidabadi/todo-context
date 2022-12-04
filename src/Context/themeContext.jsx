import React, { useContext, useReducer } from "react";
import { reducer, initState } from "./reduser";

//craete context
const ThemeContext = React.createContext();
const ThemeDispatcher = React.createContext();

//create provider
export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <ThemeContext.Provider value={state}>
      <ThemeDispatcher.Provider value={dispatch}>
        {children}
      </ThemeDispatcher.Provider>
    </ThemeContext.Provider>
  );
};

//create custom hooks
export const useThemeState = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw Error("must be use a themeContext");
  }
  return context;
};
export const useThemeDispatch = () => {
  const context = useContext(ThemeDispatcher);
  if (!context) {
    throw Error("must be use a themeDispatcher");
  }
  return context;
};
