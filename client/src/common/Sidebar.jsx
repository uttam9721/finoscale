import {
  Flag, Building2, Users, IndianRupee, Star, BarChart3,
  FileText, PieChart, Share2, Scale, MessageSquare, FileBarChart2, Bot,
} from "lucide-react";
import { useState } from "react";

const menuItems = [
  Flag, Building2, Users, IndianRupee, Star, BarChart3,
  FileText, PieChart, Share2, Scale, MessageSquare, FileBarChart2, Bot,
];

const Sidebar = ({ open, onClose }) => {
  const [active, setActive] = useState(5);

  return (
    <>
      {/* Mobile overlay backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar panel */}
      <div
        className={`
          fixed top-14 left-0 h-[calc(100vh-3.5rem)] w-16 bg-white border-r border-gray-200
          flex flex-col items-center pt-2 gap-1 z-40 transition-transform duration-200
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:z-auto lg:h-full lg:flex-shrink-0
        `}
      >
        {menuItems.map((Icon, index) => (
          <div
            key={index}
            onClick={() => { setActive(index); onClose?.(); }}
            className={`relative flex justify-center items-center w-11 h-10 rounded-lg cursor-pointer transition-colors
              ${active === index ? "bg-purple-100" : "hover:bg-gray-100"}
            `}
          >
            {active === index && (
              <div className="absolute -left-2.5 top-1/2 -translate-y-1/2 h-5 w-0.5 bg-purple-600 rounded-r" />
            )}
            <Icon
              size={18}
              className={active === index ? "text-purple-700" : "text-gray-400"}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;