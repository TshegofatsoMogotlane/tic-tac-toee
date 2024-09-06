import React, { createContext, useState } from "react";


export const ThemeContext = createContext({})



export default function ThemeContextProvider({children}) {
  const [theme, setTheme] =useState("light")

  const toggleTheme =()=>{
    setTheme((prevTheme)=>{
        const newTheme = prevTheme==="light"?"dark":"light";

        return newTheme
    })
  }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}
