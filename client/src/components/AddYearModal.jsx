import React, { useState } from "react";

const AddYearModal = ({ onAdd, onClose }) => {
  const [form, setForm] = useState({
    year: "2025-03-31",

    // Assets
    tangible_assets: "",
    intangible_assets: "",
    tangible_assets_capital_work_in_progress: "",
    intangible_assets_under_development: "",
    noncurrent_investments: "",
    long_term_loans_and_advances: "",
    other_noncurrent_assets: "",
    inventories: "",
    trade_receivables: "",
    cash_and_bank_balances: "",
    short_term_loans_and_advances: "",
    other_current_assets: "",
  });

  const getVal = (v) => Number(v) || 0;

  const handleSubmit = () => {
    // Convert values
    const tangible = getVal(form.tangible_assets);
    const intangible = getVal(form.intangible_assets);
    const cwip = getVal(form.tangible_assets_capital_work_in_progress);
    const intDev = getVal(form.intangible_assets_under_development);
    const investments = getVal(form.noncurrent_investments);
    const loans = getVal(form.long_term_loans_and_advances);
    const otherNonCurrent = getVal(form.other_noncurrent_assets);

    const inventories = getVal(form.inventories);
    const receivables = getVal(form.trade_receivables);
    const cash = getVal(form.cash_and_bank_balances);
    const shortLoans = getVal(form.short_term_loans_and_advances);
    const otherCurrent = getVal(form.other_current_assets);

    // Auto calculations
    const totalCurrentAssets =
      inventories + receivables + cash + shortLoans + otherCurrent;

    const totalOtherNonCurrent =
      investments + loans + otherNonCurrent;

    const netFixedAssets = tangible + intangible;

    const capitalWip = cwip + intDev;

    const totalAssets =
      netFixedAssets +
      capitalWip +
      totalOtherNonCurrent +
      totalCurrentAssets;

    const newData = {
      year: form.year,
      nature: "STANDALONE",
      stated_on: form.year,
      filing_type: "XBRL",
      filing_standard: "Schedule III",

      bs: {
        assets: {
          tangible_assets: tangible,
          intangible_assets: intangible,
          producing_properties: null,
          preproducing_properties: null,

          tangible_assets_capital_work_in_progress: cwip,
          intangible_assets_under_development: intDev,

          noncurrent_investments: investments,
          deferred_tax_assets_net: null,
          foreign_curr_monetary_item_trans_diff_asset_account: null,

          long_term_loans_and_advances: loans,
          other_noncurrent_assets: otherNonCurrent,

          current_investments: 0,

          inventories: inventories,
          trade_receivables: receivables,
          cash_and_bank_balances: cash,
          short_term_loans_and_advances: shortLoans,
          other_current_assets: otherCurrent,

          given_assets_total: totalAssets,
        },

        subTotals: {
          net_fixed_assets: netFixedAssets,
          capital_wip: capitalWip,
          total_other_non_current_assets: totalOtherNonCurrent,
          total_current_assets: totalCurrentAssets,

          // keep default (optional input later)
          total_equity: 0,
          total_non_current_liabilities: 0,
          total_current_liabilities: 0,
          total_debt: 0,
        },
      },
    };

    onAdd(newData);
    onClose();
  };

  const input = (name, placeholder) => (
    <input
      type="number"
      placeholder={placeholder}
      className="border w-full p-2 mb-2 rounded"
      onChange={(e) =>
        setForm({ ...form, [name]: e.target.value })
      }
    />
  );

  return (
    <div className="fixed inset-0 bg-opacity-40 flex justify-center items-center overflow-auto">
      <div className="bg-white p-6 rounded-lg w-[500px] max-h-[90vh] overflow-y-auto">

        <h2 className="text-lg font-bold mb-4">
          Add Financial Data (31 Mar 2025)
        </h2>

        {/* Net Fixed */}
        <h3 className="font-semibold mb-2">Net Fixed Assets</h3>
        {input("tangible_assets", "Tangible Assets")}
        {input("intangible_assets", "Intangible Assets")}

        {/* WIP */}
        <h3 className="font-semibold mt-3 mb-2">Capital Work In Progress</h3>
        {input(
          "tangible_assets_capital_work_in_progress",
          "Tangible CWIP"
        )}
        {input(
          "intangible_assets_under_development",
          "Intangible Under Dev"
        )}

        {/* Other Non Current */}
        <h3 className="font-semibold mt-3 mb-2">
          Other Non-current Assets
        </h3>
        {input("noncurrent_investments", "Investments")}
        {input("long_term_loans_and_advances", "Long Term Loans")}
        {input("other_noncurrent_assets", "Other Non Current")}

        {/* Current Assets */}
        <h3 className="font-semibold mt-3 mb-2">Current Assets</h3>
        {input("inventories", "Inventories")}
        {input("trade_receivables", "Trade Receivables")}
        {input("cash_and_bank_balances", "Cash & Bank")}
        {input("short_term_loans_and_advances", "Short Term Loans")}
        {input("other_current_assets", "Other Current Assets")}

        {/* Buttons */}
        <div className="flex justify-end gap-2 mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleSubmit}
          >
            Submit
          </button>

          <button
            className="border px-4 py-2 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddYearModal;