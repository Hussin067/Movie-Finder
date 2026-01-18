export function YearRangePicker({ yearRange, setYearRange, darkMode }) {
  const currentYear = 2026;
  const startYear = 1900;


  const years = [];
  for (let year = currentYear; year >= startYear; year--) {
    years.push(year);
  }

  return (
    <div className="grid grid-cols-2 gap-3">
      
      <div>
        <label className={`text-xs mb-1 block ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Start Year
        </label>
        <select
          value={yearRange.min}
          onChange={(e) => {
            const newMin = parseInt(e.target.value);
            if (newMin > yearRange.max) {
              setYearRange({ min: newMin, max: newMin });
            } else {
              setYearRange({ ...yearRange, min: newMin });
            }
          }}
          className={`w-full px-3 py-2 rounded-lg border text-sm ${
            darkMode
              ? "bg-gray-700 border-gray-600 text-white"
              : "bg-white border-gray-300 text-gray-900"
          }`}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      
      <div>
        <label className={`text-xs mb-1 block ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          End Year
        </label>
        <select
          value={yearRange.max}
          onChange={(e) => {
            const newMax = parseInt(e.target.value);
            if (newMax < yearRange.min) {
              setYearRange({ min: newMax, max: newMax });
            } else {
              setYearRange({ ...yearRange, max: newMax });
            }
          }}
          className={`w-full px-3 py-2 rounded-lg border text-sm ${
            darkMode
              ? "bg-gray-700 border-gray-600 text-white"
              : "bg-white border-gray-300 text-gray-900"
          }`}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}