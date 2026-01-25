import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import JobPilotSteps from './components/JobPilotSteps'
import { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const LandingPage = () => {
  return (
    <div className='min-h-screen'>
      <Header />
      <Hero />
      <JobPilotSteps />
      <Footer />
    </div>
  );
}

export default LandingPage