import React, { useContext } from 'react'
import Header from '../Pages/components/Header';
import JobSearchHero from './JobSearchHero';
import { AppContext } from '../Context/AppContext';
import { X } from "lucide-react";

function Jobs() {
    const { isSearched, searchFilter, setSearchFilter} =
      useContext(AppContext); 
  
  return (
    <>
      <Header />
      <JobSearchHero />
      <div className="max-w-4xl mx-auto py-6 px-4">
        {isSearched && searchFilter.title !== "" && (
          <>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Your search</h3>
            <div className="flex flex-wrap items-center">
              {searchFilter.title && (
                <span className="inline-flex items-center bg-blue-100 text-gray-800 rounded-full px-3 py-2 text-sm font-medium mr-2">
                  {searchFilter.title}
                  <X
                    className="w-4 h-4 ml-2 cursor-pointer text-gray-500 hover:text-gray-700"
                    onClick={() =>
                      setSearchFilter((prev) => ({
                        ...(prev || {}),
                        title: "",
                      }))
                    }
                    aria-label="clear title"
                  />
                </span>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Jobs