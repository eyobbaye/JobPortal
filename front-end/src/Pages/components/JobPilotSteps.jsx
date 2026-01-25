import React from 'react'
import { UserPlus, CloudUpload, Search, BadgeCheck } from "lucide-react";

const steps = [
  {
    icon: <UserPlus className="text-[#04336af7] text-2xl" />,
    title: "Create account",
    description:
      "Aliquam facilisis egestas sapien, nec tempor leo tristique at.",
  },
  {
    icon: <CloudUpload className="text-white text-2xl" />,
    title: "Uploade CV/Resume",
    description:
      "Curabitur sit amet maximus ligula. Nam a nulla ante. Nam sodales",
    highlight: true,
  },
  {
    icon: <Search className="text-[#04336af7] text-2xl" />,
    title: "Find suitable jobs",
    description: "Phasellus quis eleifend ex. Morbi nec fringilla nibh.",
  },
  {
    icon: <BadgeCheck className="text-[#04336af7] text-2xl" />,
    title: "Applay job",
    description:
      "Curabitur sit amet maximus ligula. Nam a nulla ante, Nam sodales purus.",
  },
];

function JobPilotSteps() {
  return (
    <div className=" 2xl:px-20 mx-auto bg-blue-50 py-16 px-0 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-12">
        How JobPortal work?
      </h2>
      <div className="flex flex-col justify-center sm:flex-row md:flex-grow items-center gap-8 relative">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`sm:flex flex-col items-center text-center max-w-xs ${
              step.highlight
                ? "bg-white py-6 px-0 sm:px-6 rounded-lg shadow-md"
                : ""
            }`}
          >
            <div
              className={`w-14 h-14 flex transform ml-30 sm:ml-0 items-center justify-center rounded-full mb-4 ${
                step.highlight
                  ? "bg-linear-to-r from-[#04336af7] to-[#084e9df7]"
                  : "bg-blue-100 "
              }`}
            >
              {step.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">
              {step.title}
            </h3>
            <p className="text-sm text-gray-500">{step.description}</p>
          </div>
        ))}
        {/* Arrow */}
        <div className="absolute top-2 left-[0%] right-[0%] hidden md:flex justify-between pointer-events-none">
          <svg
            className="w-6 h-6 text-blue-300"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="M0 12 C20 0, 40 24, 60 12" strokeDasharray="4 4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default JobPilotSteps 