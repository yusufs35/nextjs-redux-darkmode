
import React from "react";
import store from "../store";
import { ThemeProvider as Provider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../helpers/theme-config";

const ThemeProvider = ({ children }) => {
  const theme = store.getState().theme.darkMode ? darkTheme : lightTheme;
  return (
    <Provider theme={theme}>
      <GlobalStyles />
      {children}
    </Provider>
  );
};

export default ThemeProvider;
