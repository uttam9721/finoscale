import React, { useState } from "react";

const AddYearModal = ({ onAdd, onClose }) => {
  const [form, setForm] = useState({
    year: "2025",
    tangible_assets: "",
    inventories: "",
    trade_receivables: "",
    cash_and_bank_balances: "",
  });

  const handleSubmit = () => {
    onAdd({
      year: form.year,
      assets: {
        tangible_assets: Number(form.tangible_assets),
        inventories: Number(form.inventories),
        trade_receivables: Number(form.trade_receivables),
        cash_and_bank_balances: Number(form.cash_and_bank_balances),
      },
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-6 rounded w-96">
        <h2 className="text-lg font-bold mb-4">Add Financial Data</h2>

        {Object.keys(form).map((key) =>
          key !== "year" ? (
            <input
              key={key}
              placeholder={key}
              className="border w-full p-2 mb-2"
              onChange={(e) =>
                setForm({ ...form, [key]: e.target.value })
              }
            />
          ) : null
        )}

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