import React from "react";
import ThemeContextProvider from "./ThemeContext";
import { GameContextProvider } from "./GameContext";
import SoundEffectContextProvider from "./SoundEffectContect";
const Provider = ({ children }) => {
  return (
    <ThemeContextProvider>
      <GameContextProvider>
        <SoundEffectContextProvider>{children}</SoundEffectContextProvider>
      </GameContextProvider>
    </ThemeContextProvider>
  );
};

export default Provider;
