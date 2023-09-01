import { createContext, useState } from "react";

export const DarkModeContext = createContext();

export function DarkModeProvider({children}){
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const nowDarkMode = !prev;
      localStorage.setItem('darkMode', nowDarkMode);
      return nowDarkMode;
    })
  };

  return(
    <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
      {children}
    </DarkModeContext.Provider>
  )
}