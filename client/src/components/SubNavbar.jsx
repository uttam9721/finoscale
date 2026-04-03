// // import React from 'react'

import { CheckCircle } from "lucide-react";



const SubNavbar = ({ onAddClick }) => {
  return (
    <div className="mb-5">
      <div className="flex items-center justify-between bg-white border border-gray-200 shadow-sm px-6 py-4 rounded-lg">
        
        <div className="flex items-center gap-3">
          <CheckCircle className="text-green-500 w-5 h-5" />
          <h2 className="font-semibold text-gray-700 tracking-wide">
            FLEMING LABORATORIES LIMITED
          </h2>
        </div>

        <button
          onClick={onAddClick}   // ✅ FIX
          className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-4 py-2 rounded-md transition"
        >
          Add Latest Year Financials
        </button>
      </div>
    </div>
  );
};

export default SubNavbar;