
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
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar
        onMenuToggle={() => setSidebarOpen((v) => !v)}
        sidebarOpen={sidebarOpen}
      />

      <div className="flex flex-1 overflow-hidden relative">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main className="flex-1 flex flex-col bg-[#f4f6f9] overflow-hidden">
          <div className="flex-1 overflow-y-auto p-4 sm:p-6">
            <SubNavbar onAddClick={() => setShowModal(true)} />

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-5">
              <FinancialTable data={data} />
            </div>
          </div>
        </main>
      </div>

      {showModal && (
        <AddYearModal
          onAdd={(y) => setData([...data, y])}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default App;