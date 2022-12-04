import { useReducer } from "react";
import { themeAction } from "./themeActions";

export const initState = {
  isDark: false,
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case themeAction.LIGHT:
      return {
        ...state,
        isDark: false,
      };
    case themeAction.LIGHT:
      return {
        ...state,
        isDark: true,
      };

    default:
      return state;
  }
};
