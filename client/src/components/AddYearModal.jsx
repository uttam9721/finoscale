// import React, { useState } from "react";

// const AddYearModal = ({ onAdd, onClose }) => {
//   const [form, setForm] = useState({
//     year: "2025",
//     tangible_assets: "",
//     inventories: "",
//     trade_receivables: "",
//     cash_and_bank_balances: "",
//   });

//   const handleSubmit = () => {
//     onAdd({
//       year: form.year,
//       assets: {
//         tangible_assets: Number(form.tangible_assets),
//         inventories: Number(form.inventories),
//         trade_receivables: Number(form.trade_receivables),
//         cash_and_bank_balances: Number(form.cash_and_bank_balances),
//       },
//     });
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
//       <div className="bg-white p-6 rounded w-96">
//         <h2 className="text-lg font-bold mb-4">Add Financial Data</h2>

//         {Object.keys(form).map((key) =>
//           key !== "year" ? (
//             <input
//               key={key}
//               placeholder={key}
//               className="border w-full p-2 mb-2"
//               onChange={(e) =>
//                 setForm({ ...form, [key]: e.target.value })
//               }
//             />
//           ) : null
//         )}

//         <button
//           className="bg-blue-500 text-white px-4 py-2 mr-2"
//           onClick={handleSubmit}
//         >
//           Submit
//         </button>

//         <button onClick={onClose}>Cancel</button>
//       </div>
//     </div>
//   );
// };

// export default AddYearModal;





import React, { useState } from "react";

const AddYearModal = ({ onAdd, onClose }) => {
  const [form, setForm] = useState({
    year: "2025-03-31",
    tangible_assets: "",
    inventories: "",
    trade_receivables: "",
    cash_and_bank_balances: "",
  });

  const handleSubmit = () => {
    const newData = {
      year: form.year,
      bs: {
        assets: {
          tangible_assets: Number(form.tangible_assets),
          inventories: Number(form.inventories),
          trade_receivables: Number(form.trade_receivables),
          cash_and_bank_balances: Number(form.cash_and_bank_balances),
          intangible_assets: 0,
          noncurrent_investments: 0,
          long_term_loans_and_advances: 0,
          given_assets_total:
            Number(form.tangible_assets) +
            Number(form.inventories) +
            Number(form.trade_receivables) +
            Number(form.cash_and_bank_balances),
        },
        subTotals: {
          net_fixed_assets: Number(form.tangible_assets),
          capital_wip: 0,
          total_other_non_current_assets: 0,
          total_current_assets:
            Number(form.inventories) +
            Number(form.trade_receivables) +
            Number(form.cash_and_bank_balances),
        },
      },
    };

    onAdd(newData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-6 rounded w-96">
        <h2 className="text-lg font-bold mb-4">
          Add Financial Data (31 MAR 2025)
        </h2>

        {/* Inputs */}
        <input
          placeholder="Tangible Assets"
          className="border w-full p-2 mb-2"
          onChange={(e) =>
            setForm({ ...form, tangible_assets: e.target.value })
          }
        />

        <input
          placeholder="Inventories"
          className="border w-full p-2 mb-2"
          onChange={(e) =>
            setForm({ ...form, inventories: e.target.value })
          }
        />

        <input
          placeholder="Trade Receivables"
          className="border w-full p-2 mb-2"
          onChange={(e) =>
            setForm({ ...form, trade_receivables: e.target.value })
          }
        />

        <input
          placeholder="Cash & Bank"
          className="border w-full p-2 mb-4"
          onChange={(e) =>
            setForm({
              ...form,
              cash_and_bank_balances: e.target.value,
            })
          }
        />

        {/* Buttons */}
        <button
          className="bg-blue-500 text-white px-4 py-2 mr-2"
          onClick={handleSubmit}
        >
          Submit
        </button>

        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default AddYearModal;