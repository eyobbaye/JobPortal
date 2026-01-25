// import React from 'react'
import { motion } from 'framer-motion';
// import { Briefcase} from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const isAuthenticated = true;
  const user = { fullName: "Eyob", role: "Employer" }
  const navigate = useNavigate();
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"
    >
     
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-6 ">
              <div className="w-32 h-8 font-bold">
                {/* <Briefcase className="" onClick={() => navigate('/')} /> */}
                <img
                  src="/hidasietelecom.png"
                  alt="Hidasietelecom secondary logo"
                  w
                />
              </div>
              <span className="text-xl font-bold text-gray-950">JobPoral</span>
            </div>
            {/* Navigation Link hidden in mobile */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                onClick={() => navigate("/jobs")}
                className="text-gray-900 hover:text-gray-600 transition-colors font-medium cursor-pointer"
              >
                Find Jobs
              </a>

              <a
                onClick={() => {
                  navigate(
                    isAuthenticated && user?.role === "Employer"
                      ? "/employer-dashboard"
                      : "/login"
                  );
                }}
                className="text-gray-900 hover:text-gray-600 transition-colors font-medium cursor-pointer"
              >
                {" "}
                For Employers
              </a>
            </nav>

            {/* Auth Buuton */}
            <div className="flex items-center space-x-3">
              {isAuthenticated ? (
                <div className="flex items-center space-x-3">
                  <span className="text-[#044288]">
                    Welcome, {user?.fullName}{" "}
                  </span>
                  <a
                    href={
                      user?.role === "employer"
                        ? "/employer-dashboard"
                        : "/jobs"
                    }
                    className="bg-linear-to-r from-[#04336af7] to-[#084e9df7] text-white px-6 py-2  rounded-3xl hover:from-[#084e9df7] transition-all duration-300 shadow-sm hover:shadow-md "
                  >
                    Dashboard
                  </a>
                </div>
              ) : (
                <>
                  <a
                    href="/login"
                    className="text-gray-600 hover:text-gray-900 transition-colors font-medium px-4 py2 rounded-lg hover:bg-gray-50"
                  >
                    Login
                  </a>
                  <a
                    href="/signup"
                    className="bg-linear-to-r from-[#04336af7] to-[#084e9df7] text-white px-6 py-2 rounded-3xl hover:from-[#084e9df7] transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    Sign Up
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
    </motion.header>
  );
}

export default Header