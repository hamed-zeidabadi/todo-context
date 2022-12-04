import { themeAction } from "./themeActions";

export const initState = {
  isDark: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case themeAction.LIGHT:
      return {
        ...state,
        isDark: false,
      };
    case themeAction.DARK:
      return {
        ...state,
        isDark: true,
      };

    default:
      return initState;
  }
};
