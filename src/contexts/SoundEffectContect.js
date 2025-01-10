import React, { createContext, useState } from "react";
import useSound from "../hooks/useSound";

export const SoundEffectContext = createContext({});

export default function SoundEffectContextProvider({ children }) {
   const options ={
    volume: 0.05,
    timeout: 200
    }
  const hoverPath = "https://zaiocontent.S3.eu-west-2.amazonaws.com/sound-effects/tick.mp3";
  const clickPath = "https://zaiocontent.S3.eu-west-2.amazonaws.com/sound-effects/click.wav";
  const winnerPath = "https://zaiocontent.S3.eu-west-2.amazonaws.com/sound-effects/winner.wav";
  const completedPath = "/assets/music/Luke_Bergs&Waesto.mp3";
  const hoverSfx = useSound(hoverPath, options);
  const clickSfx = useSound(clickPath, options);
  const winSfx = useSound(winnerPath, {...options, timeout:1500});
  const completedSfx = useSound(completedPath, {...options, timeout:20000});
  return (
    <SoundEffectContext.Provider value={{hoverSfx, clickSfx, winSfx, completedSfx}}>
      {children}
    </SoundEffectContext.Provider>
  );
}
