import React, { useContext, useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { useParams } from 'react-router-dom'
import { AppContext } from '../Context/AppContext';
import Loading from './components/Loading';
import { assets } from '../assets/assets';


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
        <div>
        <div>
          <div >
            <img src={assets.company_icon} alt='Hidasie telecom' className='h-50 rounded-full inset-shadow-sm shadow-sm p-2' />
            <div>
              <h1>{ jobData.title}</h1>
            </div>

          </div>
          </div>
        </div>
        <Footer />
    </>
  ) : (
      
      <Loading />
  )
}

export default ApplyJob