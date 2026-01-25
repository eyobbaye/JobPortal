import React from "react";
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import {Search, ArrowRight, Users, Building2, TrendingUp} from 'lucide-react'


const Hero = () => {
  const isAuthnticated = false; // Replace with actual authentication logic
  const user = { fullName: 'Eyob', role: 'Employer' }
  const navigate = useNavigate();

  return (
    <section className="pt-12 pb-16 bg-white min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl text-gray-900 font-bold mb-6 leading-tight pt-10"
          >
            Find Your Dream jobs @
            <span className="block bg-linear-to-r from-[#04336af7] to-[#084e9df7] bg-clip-text text-transparent animate-text animate-bounce animate-infinite">
              Hidasietelecom
            </span>
          </motion.h1>
          {/* Sub heading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 30 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-xl text-gray-600 mb-12 max-w-2xl max-auto leading-relaxed  flex md:ml-26"
          >
            Connect Your talent with innovative professionals. Your next career
            move is just one more click away.
          </motion.p>
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 30 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-linear-to-r from-[#04336af7] to-[#084e9df7] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-[#084e9df7] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
              onClick={() => navigate("/jobs")}
            >
              <Search className="w-5 h-5" />
              <span>Find Jobs</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whhileTap={{ scale: 0.98 }}
              className="bg-amber-400 border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md"
              onClick={() => {
                navigate(
                  isAuthnticated && user?.role === "Employer"
                    ? "/employer-dashboard"
                    : "/login"
                );
              }}
            >
              Post Job
            </motion.button>
          </motion.div>
        </div>
      </div>
      {/* Subtitle Background Element */}
      {/* <div className="">
        <div className="" />
        <div className="" />
        <div className="" />
      </div> */}
    </section>
  );
};

export default Hero;
