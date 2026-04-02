// import React from "react";

// const rows = [
//   { key: "tangible_assets", label: "Tangible Assets" },
//   { key: "inventories", label: "Inventories" },
//   { key: "trade_receivables", label: "Trade Receivables" },
//   { key: "cash_and_bank_balances", label: "Cash & Bank" },
// ];

// const FinancialTable = ({ data }) => {
//   return (
//     <div className="overflow-x-auto">
//       <table className="w-full border border-[#ccc] border border-[#ccc]-[#ccc]">
//         <thead>
//           <tr className="text-start">
//             <th className=" border border-[#ccc] border border-[#ccc]-[#ccc] p-2">Particulars</th>
//             {data.map((item) => (
//               <th key={item.year} className=" border border-[#ccc] border border-[#ccc]-[#ccc] p-2">
//                 {item.year}
//               </th>
//             ))}
//           </tr>
//         </thead>

//         <tbody>
//           {rows.map((row) => (
//             <tr key={row.key}>
//               <td className=" border border-[#ccc] border border-[#ccc]-[#ccc] p-2">{row.label}</td>

//               {data.map((yearData) => (
//                 <td key={yearData.year} className="border border-[#ccc] border border-[#ccc]-[#ccc] p-2 text-right">
//                   {yearData.assets[row.key]?.toLocaleString() || 0}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default FinancialTable;







import React from "react";

const formatNumber = (num) => {
  return new Intl.NumberFormat("en-IN").format(num || 0);
};

const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const FinancialTable = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-[#ccc] border border-[#ccc]-gray-300 text-sm">
        
        {/* HEADER */}
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-[#ccc] p-3 text-left font-semibold">
              Particulars
            </th>

            {data.map((item) => (
              <th key={item.year} className="border border-[#ccc] p-3 text-center font-semibold">
                {formatDate(item.year)}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {/* ================= Assets ================= */}
          <tr className="bg-gray-200 font-semibold">
            <td className="p-2">Assets</td>
            {data.map((d) => <td key={d.year}></td>)}
          </tr>

          {/* Net Fixed Assets */}
          <tr className="bg-gray-100 font-semibold">
            <td className="p-2">Net Fixed Assets</td>
            {data.map((d) => <td key={d.year}></td>)}
          </tr>

          {/* Tangible */}
          <tr>
            <td className="border border-[#ccc] p-2 pl-6">Tangible Assets</td>
            {data.map((d) => (
              <td className="border border-[#ccc] p-2 text-right">
                {formatNumber(d.bs.assets.tangible_assets)}
              </td>
            ))}
          </tr>

          {/* Intangible */}
          <tr>
            <td className="border border-[#ccc] p-2 pl-6">Intangible Assets</td>
            {data.map((d) => (
              <td className="border border-[#ccc] p-2 text-right">
                {formatNumber(d.bs.assets.intangible_assets)}
              </td>
            ))}
          </tr>

          {/* Total Net Fixed */}
          <tr className="font-semibold">
            <td className="border border-[#ccc] p-2 pl-4">
              Total Net Fixed Assets
            </td>
            {data.map((d) => (
              <td className="border border-[#ccc] p-2 text-right">
                {formatNumber(d.bs.subTotals.net_fixed_assets)}
              </td>
            ))}
          </tr>

          {/* ================= Capital WIP ================= */}
          <tr className="bg-gray-100 font-semibold">
            <td className="p-2">Capital Work In Progress</td>
            {data.map((d) => (
              <td className="p-2 text-right">
                {formatNumber(d.bs.subTotals.capital_wip)}
              </td>
            ))}
          </tr>

          {/* ================= Other Non Current ================= */}
          <tr className="bg-gray-100 font-semibold">
            <td className="p-2">Other Non-current Assets</td>
            {data.map((d) => <td key={d.year}></td>)}
          </tr>

          <tr>
            <td className="border border-[#ccc] p-2 pl-6">Non Current Investments</td>
            {data.map((d) => (
              <td className="border border-[#ccc] p-2 text-right">
                {formatNumber(d.bs.assets.noncurrent_investments)}
              </td>
            ))}
          </tr>

          <tr>
            <td className="border border-[#ccc] p-2 pl-6">Long Term Loans</td>
            {data.map((d) => (
              <td className="border border-[#ccc] p-2 text-right">
                {formatNumber(d.bs.assets.long_term_loans_and_advances)}
              </td>
            ))}
          </tr>

          <tr className="font-semibold">
            <td className="border border-[#ccc] p-2 pl-4">
              Total Other Non Current Assets
            </td>
            {data.map((d) => (
              <td className="border border-[#ccc] p-2 text-right">
                {formatNumber(d.bs.subTotals.total_other_non_current_assets)}
              </td>
            ))}
          </tr>

          {/* ================= Current Assets ================= */}
          <tr className="bg-gray-100 font-semibold">
            <td className="p-2">Current Assets</td>
            {data.map((d) => <td key={d.year}></td>)}
          </tr>

          <tr>
            <td className="border border-[#ccc] p-2 pl-6">Inventories</td>
            {data.map((d) => (
              <td className="border border-[#ccc] p-2 text-right">
                {formatNumber(d.bs.assets.inventories)}
              </td>
            ))}
          </tr>

          <tr>
            <td className="border border-[#ccc] p-2 pl-6">Trade Receivables</td>
            {data.map((d) => (
              <td className="border border-[#ccc] p-2 text-right">
                {formatNumber(d.bs.assets.trade_receivables)}
              </td>
            ))}
          </tr>

          <tr>
            <td className="border border-[#ccc] p-2 pl-6">Cash & Bank</td>
            {data.map((d) => (
              <td className="border border-[#ccc] p-2 text-right">
                {formatNumber(d.bs.assets.cash_and_bank_balances)}
              </td>
            ))}
          </tr>

          <tr className="font-semibold">
            <td className="border border-[#ccc] p-2 pl-4">
              Total Current Assets
            </td>
            {data.map((d) => (
              <td className="border border-[#ccc] p-2 text-right">
                {formatNumber(d.bs.subTotals.total_current_assets)}
              </td>
            ))}
          </tr>

          {/* TOTAL */}
          <tr className="bg-gray-200 font-bold text-base">
            <td className="p-3">Total Assets</td>
            {data.map((d) => (
              <td className="p-3 text-right">
                {formatNumber(d.bs.assets.given_assets_total)}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FinancialTable;