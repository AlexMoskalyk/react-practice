import React from "react";
import { GlobalStyles } from "../styles/GlobalStyles";
import Header from "./header/Header";
import Main from "./main/Main";
import { ThemeProvider } from "styled-components";
import themes from "../themes";

const App = () => {
  return (
    <ThemeProvider theme={themes.dark}>
      <GlobalStyles />
      <Header />
      <Main />
    </ThemeProvider>
  );
};

export default App;
