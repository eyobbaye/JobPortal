import React from 'react'
import { assets } from "../assets/assets";

function JobCard({job}) {
  return (
    <>
      <div className=" border-zinc-500 p-6 inset-shadow-sm bg-white shadow-md rounded-xl">
        <div className="">
          <div className="gap-3 mt-2 text-xs">
            <span className="bg-blue-100 border border-blue-50 rounded-full px-4 py-0.5 text-gray-600 text-center">
              {job.category}
            </span>
            <span className="bg-blue-100 border border-blue-50 rounded-full px-4 py-0.5 text-gray-600 text-center">
              {job.level}
            </span>
          </div>
          <div className="flex">
            <h1 className="mt-4 text-gray-900 font-medium text-2xl">
              {job.title}
            </h1>
            <div className="flex justify-between items-center">
              <img className="h-26" src={assets.company_icon} alt="" />
            </div>
          </div>
          {/* <span className="bg-amber-50 border border-blue-50 rounded-full px-4 py-0.5 text-gray-600 text-center text-sm">
            {job.location}
          </span> */}

          <p
            className="text-gray-800 pt-4 text-sm"
            dangerouslySetInnerHTML={{
              __html: job.description.slice(0, 100),
            }}
          ></p>
        </div>
        <div className="mt-4 flex gap-4 text-sm">
          <button className="bg-linear-to-r from-[#04336af7] to-[#084e9df7] text-white px-8 py-2 rounded-full hover:border-gray-300 hover:bg-gray-50 transition-all duration-300">
            View Job
          </button>
          <button className="bg-amber-400 border-2 border-gray-200 text-gray-700 px-8 py-2 rounded-full  hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md">
            Applay
          </button>
        </div>
      </div>
    </>
  );
}

export default JobCard