import React from "react";

const TableRow = ({ label, rowKey, data }) => {
  return (
    <tr>
      {/* Row Label */}
      <td className="border p-2 font-medium">
        {label}
      </td>

      {/* Dynamic Values */}
      {data.map((yearData) => (
        <td
          key={yearData.year}
          className="border p-2 text-right"
        >
          {yearData.assets[rowKey]
            ? yearData.assets[rowKey].toLocaleString()
            : "0"}
        </td>
      ))}
    </tr>
  );
};

export default TableRow;