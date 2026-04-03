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
      <table className="w-full border border-gray-300 text-sm">

        {/* HEADER */}
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-3 text-left font-semibold">
              Particulars
            </th>

            {data.map((item) => (
              <th key={item.year} className="border p-3 text-center font-semibold">
                {formatDate(item.year)}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>

          {/* Assets */}
          <tr className="bg-gray-300 font-bold">
            <td className="p-2 border">Assets</td>
            {data.map((d) => <td key={d.year} className="border"></td>)}
          </tr>

          {/* Net Fixed Assets */}
          <tr className="bg-gray-200 font-semibold">
            <td className="p-2 border">Net Fixed Assets</td>
            {data.map((d) => <td key={d.year} className="border"></td>)}
          </tr>

          {/* Tangible */}
          <tr>
            <td className="border p-2 pl-6">Tangible Assets</td>
            {data.map((d) => (
              <td className="border p-2 text-right">
                {formatNumber(d.bs.assets.tangible_assets)}
              </td>
            ))}
          </tr>

          {/* Intangible */}
          <tr>
            <td className="border p-2 pl-6">Intangible Assets</td>
            {data.map((d) => (
              <td className="border p-2 text-right">
                {formatNumber(d.bs.assets.intangible_assets)}
              </td>
            ))}
          </tr>

          {/* Total Net Fixed */}
          <tr className="font-semibold">
            <td className="border p-2 pl-4">
              Total Net Fixed Assets
            </td>
            {data.map((d) => (
              <td className="border p-2 text-right">
                {formatNumber(
                  d.bs.assets.tangible_assets +
                  (d.bs.assets.intangible_assets || 0)
                )}
              </td>
            ))}
          </tr>

          {/* Capital WIP */}
          <tr className="bg-gray-200 font-semibold">
            <td className="p-2 border">Capital Work In Progress</td>
            {data.map((d) => (
              <td className="border p-2 text-right">
                {formatNumber(
                  (d.bs.assets.tangible_assets_capital_work_in_progress || 0) +
                  (d.bs.assets.intangible_assets_under_development || 0)
                )}
              </td>
            ))}
          </tr>

          {/* Other Non Current */}
          <tr className="bg-gray-200 font-semibold">
            <td className="p-2 border">Other Non-current Assets</td>
            {data.map((d) => <td key={d.year} className="border"></td>)}
          </tr>

          <tr>
            <td className="border p-2 pl-6">Non Current Investments</td>
            {data.map((d) => (
              <td className="border p-2 text-right">
                {formatNumber(d.bs.assets.noncurrent_investments)}
              </td>
            ))}
          </tr>

          <tr>
            <td className="border p-2 pl-6">Long Term Loans</td>
            {data.map((d) => (
              <td className="border p-2 text-right">
                {formatNumber(d.bs.assets.long_term_loans_and_advances)}
              </td>
            ))}
          </tr>

          <tr className="font-semibold">
            <td className="border p-2 pl-4">
              Total Other Non Current Assets
            </td>
            {data.map((d) => (
              <td className="border p-2 text-right">
                {formatNumber(
                  (d.bs.assets.noncurrent_investments || 0) +
                  (d.bs.assets.long_term_loans_and_advances || 0)
                )}
              </td>
            ))}
          </tr>

          {/* Current Assets */}
          <tr className="bg-gray-200 font-semibold">
            <td className="p-2 border">Current Assets</td>
            {data.map((d) => <td key={d.year} className="border"></td>)}
          </tr>

          <tr>
            <td className="border p-2 pl-6">Inventories</td>
            {data.map((d) => (
              <td className="border p-2 text-right">
                {formatNumber(d.bs.assets.inventories)}
              </td>
            ))}
          </tr>

          <tr>
            <td className="border p-2 pl-6">Trade Receivables</td>
            {data.map((d) => (
              <td className="border p-2 text-right">
                {formatNumber(d.bs.assets.trade_receivables)}
              </td>
            ))}
          </tr>

          <tr>
            <td className="border p-2 pl-6">Cash & Bank</td>
            {data.map((d) => (
              <td className="border p-2 text-right">
                {formatNumber(d.bs.assets.cash_and_bank_balances)}
              </td>
            ))}
          </tr>

          <tr className="font-semibold">
            <td className="border p-2 pl-4">
              Total Current Assets
            </td>
            {data.map((d) => (
              <td className="border p-2 text-right">
                {formatNumber(d.bs.subTotals.total_current_assets)}
              </td>
            ))}
          </tr>

          {/* TOTAL */}
          <tr className="bg-gray-300 font-bold text-base">
            <td className="p-3 border">Total Assets</td>
            {data.map((d) => (
              <td className="p-3 border text-right">
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