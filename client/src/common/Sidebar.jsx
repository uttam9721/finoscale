// import React, { useState } from "react";
// import {
//   Menu,
//   Flag,
//   Building2,
//   Users,
//   IndianRupee,
//   Star,
//   BarChart3,
//   FileText,
//   PieChart,
//   Share2,
//   Scale,
//   MessageSquare,
//   FileBarChart2,
//   Bot,
// } from "lucide-react";

// const menuItems = [
//   { icon: Flag },
//   { icon: Building2 },
//   { icon: Users },
//   { icon: IndianRupee },
//   { icon: Star },
//   { icon: BarChart3 }, // active one
//   { icon: FileText },
//   { icon: PieChart },
//   { icon: Share2 },
//   { icon: Scale },
//   { icon: MessageSquare },
//   { icon: FileBarChart2 },
//   { icon: Bot },
// ];

// const Sidebar = () => {
//   const [active, setActive] = useState(5);

//   return (
//     <div className="h-screen w-20 bg-gray-100 flex flex-col items-center border-r">
      
//       {/* Top Logo Section */}
//       <div className="w-full h-16 bg-purple-800 flex items-center justify-center">
//         <Menu className="text-white" />
//       </div>

//       {/* Icons */}
//       <div className="flex flex-col items-center gap-4 mt-4 w-full">
//         {menuItems.map((item, index) => {
//           const Icon = item.icon;

//           return (
//             <div
//               key={index}
//               onClick={() => setActive(index)}
//               className={`w-full flex justify-center py-3 cursor-pointer relative 
//               ${
//                 active === index
//                   ? "bg-purple-100"
//                   : "hover:bg-gray-200"
//               }`}
//             >
//               {/* Active Indicator */}
//               {active === index && (
//                 <div className="absolute left-0 top-0 h-full w-1 bg-purple-600"></div>
//               )}

//               <Icon
//                 className={`${
//                   active === index
//                     ? "text-purple-700"
//                     : "text-gray-500"
//                 }`}
//               />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;




import {
  Flag,
  Building2,
  Users,
  IndianRupee,
  Star,
  BarChart3,
  FileText,
  PieChart,
  Share2,
  Scale,
  MessageSquare,
  FileBarChart2,
  Bot,
} from "lucide-react";
import { useState } from "react";

const menuItems = [
  Flag,
  Building2,
  Users,
  IndianRupee,
  Star,
  BarChart3,
  FileText,
  PieChart,
  Share2,
  Scale,
  MessageSquare,
  FileBarChart2,
  Bot,
];

const Sidebar = () => {
  const [active, setActive] = useState(5);

  return (
    <div className="h-screen w-20 bg-gray-100 border-r flex flex-col items-center">
      
      {/* Top Purple */}
      <div className="w-full h-16 bg-purple-900 flex items-center justify-center">
        {/* <Menu className="text-white" /> */}
      </div>

      {/* Icons */}
      <div className="flex flex-col w-full mt-4">
        {menuItems.map((Icon, index) => (
          <div
            key={index}
            onClick={() => setActive(index)}
            className={`relative flex justify-center py-4 cursor-pointer
              ${active === index ? "bg-purple-100" : "hover:bg-gray-200"}
            `}
          >
            {active === index && (
              <div className="absolute left-0 top-0 h-full w-1 bg-purple-600"></div>
            )}

            <Icon
              className={`${
                active === index
                  ? "text-purple-700"
                  : "text-gray-500"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;