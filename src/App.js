import React, { useContext } from "react";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/Global.styled";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { ThemeContext } from "./contexts/ThemeContext";
import MusicPlyer from "./components/musicPlayer/MusicPlyer";


function App() {
  const { theme } = useContext(ThemeContext);

  const mode = theme === "light" ? lightTheme : darkTheme;

  return (
    <div>
      <ThemeProvider theme={mode}>
          <GlobalStyle />
          <Router />
          <MusicPlyer />
      </ThemeProvider>
    </div>
  );
}

export default App;
