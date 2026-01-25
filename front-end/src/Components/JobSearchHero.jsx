import React, { useContext } from 'react'
import {Search} from 'lucide-react'
import { useRef } from 'react';
import { AppContext } from '../Context/AppContext';

function JobSearchHero() {

  const { setIsSearched, setSearchFilter } = useContext(AppContext); 
  const titleRef = useRef(null)

  const onSearch =()=>{
    setSearchFilter({
      title: titleRef.current.value
    })
    setIsSearched(true)
    console.log({
      title: titleRef.current.value
    })
  }
  return (
    <>
      <section className="w-full bg-linear-to-r from-[#04336af7] to-[#084e9df7]  py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Title */}
          <h1 className="text-white text-3xl md:text-4xl font-semibold mb-8">
            Find Your Dream Job
          </h1>

          {/* Search bar */}
          <div className="flex items-center bg-white rounded-full shadow-lg overflow-hidden max-w-4xl mx-auto mb-6 py-2">
            <div className="flex items-center px-4 text-gray-400">
              🔍
              <Search />
            </div>
            <input
              type="text"
              placeholder="Job title, Keywords search here.."
              className="flex-1 py-3 px-2 outline-none text-gray-700"
              ref={titleRef}
            />
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 font-medium rounded-full mr-1" onClick={onSearch}>
              Search
            </button>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center items-center gap-3">
            {[
              "Category",
              "Location",
              "Career",
              "Employment Type",
              "Posted Within",
            ].map((item) => (
              <button
                key={item}
                className="bg-white text-gray-600 px-5 py-2 rounded-full border border-gray-200 shadow-sm hover:bg-gray-50 flex items-center gap-2"
              >
                {item}
                <span className="w-2 h-2 bg-blue-500 rounded-full" />
              </button>
            ))}

            {/* Clear all */}
            <button className="text-white font-medium flex items-center gap-1 hover:underline">
              ⟲ Clear All
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default JobSearchHero;