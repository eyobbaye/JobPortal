// single context for the project
// Logic and API call

import { createContext, useState } from "react";

export const AppContext = createContext(null)
export const AppContextProvider = (props) => {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme ((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }
  
  // every thing inside this value variable is accessable thought all folder
  // allow to share date across all components without having to pass props down
  const value = {
    theme,
    toggleTheme

  }
    return(

      <AppContext.Provider value={value} >
        {props.children}
    
      </AppContext.Provider >
    )

  
}