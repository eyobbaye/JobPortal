// single context for the project
// Logic and API call

import { createContext, useEffect, useState } from "react";
import { jobsData } from "../assets/assets";

export const AppContext = createContext(null);
export const AppContextProvider = (props) => {
  const [theme, setTheme] = useState("light")
  const [searchFilter, setSearchFilter] = useState({
    title: '',
    location: ''
  })
  const [isSearched, setIsSearched] = useState(false);
  const [jobs, setJobs] = useState([]);

  const toggleTheme = () => {
    setTheme ((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }
  
  // every thing inside this value variable is accessable thought all folder
  // allow to share date across all components without having to pass props down
  const value = {
    theme,
    toggleTheme,
    setSearchFilter, searchFilter,
    isSearched, setIsSearched,
    setJobs, jobs

  }
  // Fech jobs data function
  const fetchJobs = async () => {
    setJobs(jobsData)
    
  }
  useEffect(() => {
    fetchJobs();
    
  }, [])
    return(

      <AppContext.Provider value={value} >
        {props.children}
    
      </AppContext.Provider >
    )

  
}