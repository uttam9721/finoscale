// import React from 'react'

// const SubNavbar = () => {
//   return (
//         <div className=''>
//     <div className='flex items-center justify-between bg-white ]border shadow mb-5 py-4 rounded'>

//       {/* <div> */}
//           <div className="flex items-center gap-2 mb-4">
//               {/* <span className="text-green-600">✔</span> */}
//               <h2 className="font-semibold">
//                 FLEMING LABORATORIES LIMITED
//               </h2>
//       </div>
//       <div>
//         <button className='bg-purple-600 text-white font-bold p-2 rounded'>Add Latest Year Financials</button>
//       </div>
//         </div>
//     </div>
//   )
// }

// export default SubNavbar




import React from "react";
import { CheckCircle } from "lucide-react";

const SubNavbar = () => {
  return (
    <div className="mb-5">
      
      <div className="flex items-center justify-between bg-white border border-gray-200 shadow-sm px-6 py-4 rounded-lg">
        
        {/* Left Side */}
        <div className="flex items-center gap-3">
          
          {/* Green Verified Icon */}
          <CheckCircle className="text-green-500 w-5 h-5" />

          {/* Company Name */}
          <h2 className="font-semibold text-gray-700 tracking-wide">
            FLEMING LABORATORIES LIMITED
          </h2>
        </div>

        {/* Right Button */}
        <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-4 py-2 rounded-md transition">
          Add Latest Year Financials
        </button>
      </div>
    </div>
  );
};

export default SubNavbar;