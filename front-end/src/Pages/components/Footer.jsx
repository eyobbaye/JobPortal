import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-[#04336af7] to-[#084e9df7] text-white py-4">
      <div className="container mx-auto text-center flex justify-around items-center">
        <p>
          &copy; {new Date().getFullYear()} Job Portal. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          Made with ❤️ by 
          <a href="https://hidasietelecom.et" className="underline ml-1 hover:text-gray-300 animate-wiggle animate-infinite ">
            Hidasie Telecom
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer