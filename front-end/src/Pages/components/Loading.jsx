import React from 'react'

function Loading() {
  return (
    // Loading Animation before display the jobdata
    <div className="min-h-screen flex items-center justify-center">
      {/* Loading Animation */}
      <div className="w-25 h-25 border-4 border-blue-800 border-t-amber-400 rounded-full animate-spin  "></div>
    </div>
  );
}

export default Loading