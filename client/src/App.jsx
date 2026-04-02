// // // import React, { useState } from "react";
// // // import FinancialTable from "./components/FinancialTable";
// // // import AddYearModal from "./components/AddYearModal";
// // // import { financialData } from "./data/financialData";
// // // import Navbar from "./components/Navbar";

// // // function App() {
// // //   const [data, setData] = useState(financialData);
// // //   const [showModal, setShowModal] = useState(false);

// // //   const handleAddYear = (newData) => {
// // //     setData([...data, newData]);
// // //   };

// // //   return (
// // //     <>
// // //     <Navbar />
// // //     <Sidebar/>
// // //     <div className="p-6">
// // //       <div className="flex justify-between mb-4">
// // //         <h1 className="text-xl font-bold">Financials</h1>

// // //         <button
// // //           className="bg-purple-600 text-white px-4 py-2"
// // //           onClick={() => setShowModal(true)}
// // //         >
// // //           Add Latest Year Financials
// // //         </button>
// // //       </div>

// // //       <FinancialTable data={data} />

// // //       {showModal && (
// // //         <AddYearModal
// // //           onAdd={handleAddYear}
// // //           onClose={() => setShowModal(false)}
// // //         />
// // //       )}
// // //     </div>
// // //     </>
// // //   );
// // // }

// // // export default App;



// // import Sidebar from "./common/Sidebar";
// // import Navbar from "./components/Navbar";
// // import FinancialTable from "./components/FinancialTable";
// // import { financialData } from "./data/financialData";
// // import SubNavbar from './components/SubNavbar';

// // function App() {
// //   return (
// //     <div className="flex">
      
// //       {/* Sidebar */}
// //       <Sidebar />

// //       {/* Main Content */}
// //       <div className="flex-1 bg-gray-100 min-h-screen">
        
// //         <Navbar />

// //         {/* Content */}
// //         <div className="p-6">
// //           {/* <div> */}
// //             <SubNavbar />
// //           {/* </div> */}
// //           <div className="bg-white rounded shadow p-4">
            
// //             {/* Company Name */}
// //             {/* <div className="flex items-center gap-2 mb-4">
// //               <span className="text-green-600">✔</span>
// //               <h2 className="font-semibold">
// //                 FLEMING LABORATORIES LIMITED
// //               </h2>
// //             </div> */}

// //             {/* Table */}
// //             <FinancialTable data={financialData} />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;



// import Sidebar from "./common/Sidebar";
// import Navbar from "./components/Navbar";
// import SubNavbar from "./components/SubNavbar";
// import FinancialTable from "./components/FinancialTable";
// import { financialData } from "./data/financialData";

// function App() {
//   return (
//     <div className="flex h-screen overflow-hidden">
      
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col bg-[#f4f6f9]">
        
//         {/* Top Navbar */}
//         <Navbar />

//         {/* Scrollable Content */}
//         <div className="flex-1 overflow-y-auto p-6">
          
//           {/* Sub Navbar */}
//           <SubNavbar />

//           {/* Table Card */}
//           <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
            
//             <FinancialTable data={financialData} />

//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;






import Sidebar from "./common/Sidebar";
import Navbar from "./components/Navbar";
import SubNavbar from "./components/SubNavbar";
import FinancialTable from "./components/FinancialTable";
import AddYearModal from "./components/AddYearModal";
import { financialData } from "./data/financialData";
import { useState } from "react";

function App() {
  const [data, setData] = useState(financialData);
  const [showModal, setShowModal] = useState(false);

  const handleAddYear = (newYear) => {
    setData([...data, newYear]);
  };

  return (
    <>

        <Navbar />
    <div className="flex h-screen overflow-hidden">
      
      <Sidebar />

      <div className="flex-1 flex flex-col bg-[#f4f6f9]">
        

        <div className="flex-1 overflow-y-auto p-6">
          
          {/* PASS CLICK HANDLER */}
          <SubNavbar onAddClick={() => setShowModal(true)} />

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
            <FinancialTable data={data} />
          </div>

          {/* MODAL */}
          {showModal && (
            <AddYearModal
            onAdd={handleAddYear}
              onClose={() => setShowModal(false)}
            />
          )}

        </div>
      </div>
    </div>
            </>
  );
}

export default App;