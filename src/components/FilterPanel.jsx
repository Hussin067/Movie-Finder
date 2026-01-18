import { Calendar, Star } from "lucide-react"; 
import { YearRangePicker } from "./YearRangePicker";

function FilterPanel({
  darkMode,
  selectedGenre,
  setSelectedGenre,
  yearRange,
  setYearRange,
  minRating,
  setMinRating,
  onGenerate,
  loading,
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

  const RATINGS = [
    { value: 0, label: "All Ratings" },
    { value: 5, label: "5+ ⭐" },
    { value: 6, label: "6+ ⭐⭐" },
    { value: 7, label: "7+ ⭐⭐⭐" },
    { value: 8, label: "8+ ⭐⭐⭐⭐" },
  ];

  return (
    <div
      className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-lg shadow-lg p-4 sm:p-6 mb-6 sm:mb-8`}
    >
      <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Filters</h2>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        
        
        <div>
          <label className="block mb-2 font-medium text-sm sm:text-base">
            Genre
          </label>
          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            className={`w-full px-3 sm:px-4 py-2 rounded-lg border text-sm sm:text-base ${
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
          <label className=" mb-2 font-medium flex items-center gap-2 text-sm sm:text-base">
            <Calendar className="w-4 h-4" />
            Year Range
          </label>
          <YearRangePicker
            yearRange={yearRange}
            setYearRange={setYearRange}
            darkMode={darkMode}
          />
        </div>

        
        <div>
          <label className="mb-2 font-medium flex items-center gap-2 text-sm sm:text-base">
            <Star className="w-4 h-4" />
            Minimum Rating
          </label>
          <select
            value={minRating}
            onChange={(e) => setMinRating(parseFloat(e.target.value))}
            className={`w-full px-3 sm:px-4 py-2 rounded-lg border text-sm sm:text-base ${
              darkMode
                ? "bg-gray-700 border-gray-600"
                : "bg-white border-gray-300"
            }`}
          >
            {RATINGS.map((rating) => (
              <option key={rating.value} value={rating.value}>
                {rating.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      
      <div className="mt-4 sm:mt-6">
        <button
          onClick={onGenerate}
          disabled={loading}
          className={`w-full py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-medium text-white transition text-sm sm:text-base ${
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