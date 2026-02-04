import React, { useContext, useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { useParams } from 'react-router-dom'
import { AppContext } from '../Context/AppContext';
import Loading from './components/Loading';
import { assets} from '../assets/assets';
import { Banknote, Briefcase, Mail, User } from 'lucide-react';
import moment from "moment";
import JobCard from '../Components/JobCard';


function ApplyJob() {

  const { id } = useParams();// each jobs id
  const [jobData, setJobData] = useState(null) //variable to store the jobs data
  const { jobs } = useContext(AppContext) //all job from the AppContext
  
  // fetching the jobs data from AppContext
  useEffect(() => {
    const data = jobs.filter(job => job._id === id)
    if (data.length !== 0) {
      setJobData(data[0])
      console.log(data[0])
    }
  }, [id, jobs])// dependency aray
  // check the if jobs list and then display the job list with id if not display another div 
  return jobData ? (
    <>
      <Header />
      <div className="min-h-screen flex flex-col container py-10 px-4 2xl:py-20 mx-auto  ">
        <div className="bg-white text-black rounded-lg w-full">
          <div className="flex justify-center md:justify-between flex-wrap  text-white gap-8 px-14 py-20 mb-6 bg-linear-to-b from-[#04336a] to-[#375a88] border-2 border-amber-400  rounded-xl">
            <div className="flex flex-col md:flex-row items-center">
              <img
                src={assets.company_icon}
                alt="Hidasie telecom"
                className="h-50 rounded-full inset-shadow-sm shadow-sm p-4 mr-4 max-md:mb-6 bg-white"
              />
              <div className="text-center md:text-left text-amber-400">
                <h1 className="text-2xl sm:text-4xl font-medium">
                  {jobData.title}
                </h1>

                <div className="flex flex-row flex-wrap max-md:justify-center gap-y-2 gap-6 items-center mt-4 text-white">
                  <span className="flex items-center gap-2">
                    <Briefcase className="text-amber-400" />
                    {jobData.companyId.name}
                  </span>
                  {/* <span className='flex items-center gap-2'>
                    <Mail />
                    {jobData.companyId.email}
                  </span> */}
                  <span className="flex items-center gap-2">
                    <User className="text-amber-400" />
                    {jobData.level}
                  </span>
                  <span className="flex items-center gap-2">
                    <Banknote className="text-amber-400" />
                    {jobData.salary}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center text-end text-sm max-md:max-auto max-md:text-center">
              <button className="bg-amber-400 border-2 border-gray-200 text-gray-700 px-8 py-2 rounded-full  hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md mb-4">
                Applay
              </button>
              <p className="text-gray-200">
                Posted {moment(jobData.date).fromNow()}
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-start">
            <div className="w-full lg:w-2/3">
              <h2 className="font-bold text-2xl text-[#04336af7] pl-4">
                Job Description
              </h2>
              <div
                className="job-description"
                dangerouslySetInnerHTML={{ __html: jobData.description }}
              ></div>
              <button className="bg-linear-to-r from-[#04336af7] to-[#084e9df7] border-2 border-gray-200 text-white px-8 py-2 rounded-full  hover:border-amber-200 hover:bg-amber-400 transition-all duration-300 shadow-sm hover:shadow-md mt-10 ">
                Apply Now
              </button>
            </div>
            {/* Right Section related job */}
            <div className='w-full lg:w-1/4 mt-8 lg:mt-0 space-y-5 mr-12'>
              <h2>
                Related <em className='text-blue-950'>{jobData.category}</em> jobs
              </h2>
              {jobs.filter(job=> job._id !== jobData._id && job.category === jobData.category).slice(0,2).map((job,index)=> <JobCard key={index} job={job} />)}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <Loading />
  );
}

export default ApplyJob