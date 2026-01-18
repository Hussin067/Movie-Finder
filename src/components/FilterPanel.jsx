
import { Calendar } from "lucide-react";
import { YearRangePicker } from "./YearRangePicker"; 

function FilterPanel({
  darkMode,
  selectedGenre,
  setSelectedGenre,
  yearRange,
  setYearRange,
  onGenerate,
  loading 
}) {
  const GENRES = [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 18, name: "Drama" },
    { id: 14, name: "Fantasy" },
    { id: 27, name: "Horror" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Sci-Fi" },
    { id: 53, name: "Thriller" },
  ];

  return (
    <div
      className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-lg shadow-lg p-6 mb-8`}
    >
      <h2 className="text-xl font-bold mb-4">Filters</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Genre Filter */}
        <div>
          <label className="block mb-2 font-medium">Genre</label>
          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            className={`w-full px-4 py-2 rounded-lg border ${
              darkMode
                ? "bg-gray-700 border-gray-600"
                : "bg-white border-gray-300"
            }`}
          >
            <option value="">All Genres</option>
            {GENRES.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
        </div>

        
        <div>
          <label className="mb-2 font-medium flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Year Range
          </label>
          <YearRangePicker
            yearRange={yearRange}
            setYearRange={setYearRange}
            darkMode={darkMode}
          />
        </div>
      </div>

    
      <div className="mt-6">
        <button
          onClick={onGenerate}
          disabled={loading}
          className={`w-full py-3 px-6 rounded-lg font-medium text-white transition ${
            loading
              ? "bg-purple-400 cursor-not-allowed"
              : "bg-purple-600 hover:bg-purple-700"
          }`}
        >
          {loading ? "Finding Movie..." : "🎬 Generate Random Movie"}
        </button>
      </div>
    </div>
  );
}

export default FilterPanel;