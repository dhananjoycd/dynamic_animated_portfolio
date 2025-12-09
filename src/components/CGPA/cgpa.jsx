import { useState } from "react";

export default function UniversityCGPACalculator() {
  const [rows, setRows] = useState([{ id: 1, name: "", credit: "", gp: "" }]);

  const addRow = () => {
    setRows([...rows, { id: rows.length + 1, name: "", credit: "", gp: "" }]);
  };

  const updateRow = (id, field, value) => {
    setRows(rows.map((r) => (r.id === id ? { ...r, [field]: value } : r)));
  };

  const calculateCGPA = () => {
    let totalCredits = 0;
    let totalPoints = 0;

    rows.forEach((r) => {
      const credit = parseFloat(r.credit);
      const gp = parseFloat(r.gp);
      if (!isNaN(credit) && !isNaN(gp)) {
        totalCredits += credit;
        totalPoints += credit * gp;
      }
    });

    if (totalCredits === 0) return "0.00";
    return (totalPoints / totalCredits).toFixed(2);
  };

  // Sort the rows by GP in descending order for the summary list
  const sortedRows = [...rows].sort(
    (a, b) => parseFloat(b.gp || 0) - parseFloat(a.gp || 0)
  );

  return (
    // Dark Theme Background
    <div className="min-h-screen bg-gray-900 flex items-start justify-center py-12 px-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <h1 className="text-4xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400">
          🎓 University CGPA Calculator
        </h1>

        {/* Input Rows Section - Using the requested background style */}
        <div className="space-y-6 mb-8 bg-gray-800/70 p-8 rounded-xl border border-teal-600/30 shadow-2xl">
          {rows.map((r, index) => (
            <div
              key={r.id}
              // Modified to match requested grid structure (col-1 on mobile, col-3 on large screens)
              className="grid grid-cols-3 gap-2"
            >
              {/* Subject Input */}
              <input
                type="text"
                placeholder={`Optional: Subject (${index + 1})`}
                value={r.name}
                onChange={(e) => updateRow(r.id, "name", e.target.value)}
                // Dark input styling: Dark background, light text, teal focus border
                className="w-full bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-teal-500 focus:ring-teal-500 p-3 rounded-lg transition"
              />
              {/* Credit Input */}
              <input
                type="number"
                placeholder="Course Credit (e.g., 4.0)"
                value={r.credit}
                onChange={(e) => updateRow(r.id, "credit", e.target.value)}
                // Dark input styling
                className="w-full bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-teal-500 focus:ring-teal-500 p-3 rounded-lg transition"
              />
              {/* GP Input */}
              <input
                type="number"
                step="0.01"
                placeholder="Obtained GP (e.g., 3.75)"
                value={r.gp}
                onChange={(e) => updateRow(r.id, "gp", e.target.value)}
                // Dark input styling
                className="w-full bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-teal-500 focus:ring-teal-500 p-3 rounded-lg transition"
              />
            </div>
          ))}
        </div>

        {/* Add Subject Button - Vibrant color */}
        <button
          onClick={addRow}
          className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-teal-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:from-teal-600 hover:to-purple-600 transition duration-300 mb-10"
        >
          ➕ Add Another Subject
        </button>

        <hr className="border-t border-gray-700 my-8" />

        {/* CGPA and Summary Result Block - High Contrast */}
        <div className="p-8 bg-gray-800 rounded-2xl border border-purple-500/50 shadow-inner">
          {/* Calculated CGPA Display */}
          <h2 className="text-3xl font-bold mb-4 text-gray-200 flex justify-between items-center">
            Calculated CGPA:
            <span className="text-purple-400 bg-gray-900 px-5 py-3 rounded-xl shadow-2xl border-2 border-purple-500">
              {calculateCGPA()}
            </span>
          </h2>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-teal-400 border-b pb-2 border-gray-700">
            📊 Performance Breakdown (GP High → Low)
          </h3>
          <ul className="space-y-3">
            {sortedRows.map((s) => (
              <li
                key={s.id}
                // Conditional colors for GP performance on a dark background
                className={`p-4 rounded-lg shadow-md flex justify-between items-center transition duration-200 
                  ${
                    parseFloat(s.gp) >= 3.5
                      ? "bg-green-700 text-white"
                      : parseFloat(s.gp) >= 3.0
                      ? "bg-amber-700 text-white"
                      : parseFloat(s.gp) >= 2.75
                      ? "bg-pink-700 text-white"
                      : "bg-red-700 text-white"
                  }
                `}
              >
                <span className="font-medium truncate mr-4">
                  {s.name || `Subject ${s.id}`}
                </span>
                <div className="flex items-center space-x-6 text-sm">
                  <span className="text-gray-200">
                    Credits: {s.credit || "-"}
                  </span>
                  <span className="font-bold text-lg">GP: {s.gp || "N/A"}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
