import React, { useContext, useEffect, useState } from 'react'
import Header from '../Pages/components/Header';
import JobSearchHero from './JobSearchHero';
import { AppContext } from '../Context/AppContext';
import { X, CircleArrowLeft, CircleArrowRight, LayoutGrid } from "lucide-react";
import { JobCategories } from "../assets/assets";
import JobCard from './JobCard';
import Footer from '../Pages/components/Footer';

function Jobs() {
  const { isSearched, searchFilter, setSearchFilter, jobs } =
    useContext(AppContext);
  const [showFilter, setShowFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(2);
  const [isFlex, setIsFlex] = useState(false);
  const [selectedCatagories, setSelectedCatagories] = useState([]);
  const [filterJobs, setFilterJobs] = useState(jobs);

  const handleCheckboxChange = (catagory) => {
    setSelectedCatagories((prev) =>
      prev.includes(catagory)
        ? prev.filter((c) => !c == catagory) //Remove
        : [...prev, catagory], //Add
    );
  };
  //  Filtered Logic
  useEffect(() => {

    const machCatagory = (jobs) =>
      selectedCatagories.length === 0 ||
      selectedCatagories.includes(jobs.category);
    // search filter
    const matchsTitle = job => searchFilter.title === "" || job.title.toLowerCase().includes(searchFilter.title.toLowerCase());
    //display the fikterd jobs in order.
    const newFilterdJobs = jobs.slice().reverse().filter(
      job => machCatagory(job) && matchsTitle(job)
    )
    setFilterJobs(newFilterdJobs)
    // make the current page 1 after filter
    setCurrentPage(1)
    
  },[jobs,selectedCatagories,searchFilter])

  return (
    <>
      <Header />
      <JobSearchHero />
      <div className="container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8">
        <div className="relative w-full bg-white lg:sticky lg:top-28  lg:h-100 lg:w-1/4  lg:inset-shadow-sm lg:shadow-md lg:rounded-2xl px-4 p-8 mr-8">
          {isSearched && searchFilter.title !== "" && (
            <>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Your search
              </h3>
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
          {/* Catagory filter for mobile-device */}
          <button
            onClick={() => setShowFilter((prev) => !prev)}
            className="px-6 py-1.5 border text-amber-500 border-blue-900 rounded-md lg:hidden"
          >
            {showFilter ? "CLOSE" : "FILTER"}
          </button>

          {/* Catagory search */}
          <div className={showFilter ? "" : "max-lg:hidden"}>
            <h4 className="font-medium text-lg py-4">Search by Catagories</h4>
            <ul className="space-y-4 text-gray-600">
              {JobCategories.map((category, index) => (
                <li key={index} className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    onChange={() => handleCheckboxChange(category)}
                    checked={selectedCatagories.includes(category)}
                  />
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* List all Jobs */}
        <section className="w-full lg:w-3/4 text-gray-800 max-lg:px-4">
          <div className="flex justify-between">
            <h3 id="job-list" className="font-medium text-3xl py-2 mb-4">
              Latest Jobs
            </h3>
            <div className="flex gap-2">
              <LayoutGrid
                onClick={() => setIsFlex(!isFlex)}
                className="mb-4 w-6 h-6 rounded"
              />
              {isFlex ? "Flex" : "Grid"}
            </div>
          </div>

          {/* Toggle Layout */}
          <div
            className={
              isFlex
                ? "flex flex-wrap gap-4"
                : "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4"
            }
          >
            {/* render job list with pagination  using .slice()*/}
            {/* filter jobs using filterJobs */}

            {filterJobs
              .slice((currentPage - 1) * 6, currentPage * 6)
              .map((job, index) => (
                <JobCard key={index} job={job} />
              ))}
          </div>
          {/* Jobs pagination */}
          {/* sync the pagination number with filtered jobs with filtersJobs rather than jobs. */}
          {filterJobs.length > 0 && (
            <div className="flex items-center justify-center space-x-3 mt-4">
              <a href="#job-list">
                {/* pagination for left arrow icon */}
                <CircleArrowLeft
                  onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
                  className="w-9 h-9 text-blue-900 hover:text-blue-700"
                />
              </a>
              {/* pagination 6 cards of job list */}
              {Array.from({ length: Math.ceil(filterJobs.length / 6) }).map(
                (_, index) => (
                  <a href="#job-list">
                    {/* numbers of page */}
                    <button
                      onClick={() => setCurrentPage(index + 1)}
                      className={`w-8 h-8 flex justify-center items-center border border-blue-900 rounded-full text-amber-500 ${currentPage === index + 1 ? "text-blue-50 bg-amber-500" : "bg-blue-50"}`}
                    >
                      {index + 1}
                    </button>
                  </a>
                ),
              )}
              <a href="#job-list">
                {/* pagination for next arraow icon */}
                <CircleArrowRight
                  onClick={() =>
                    setCurrentPage(
                      Math.min(currentPage + 1, Math.ceil(jobs.length / 6)),
                      1,
                    )
                  }
                  className="w-9 h-9 text-blue-900 hover:text-blue-700"
                />
              </a>
            </div>
          )}
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Jobs