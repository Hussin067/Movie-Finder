import { Moon, Sun, Film, List } from "lucide-react";

function Navbar({
  darkMode,
  setDarkMode,
  currentPage,
  setCurrentPage,
  watchlistCount,
}) {
  return (
    <header className={`${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg`}>
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Film className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
            <h1 className="text-lg sm:text-2xl font-bold">RandomMovie</h1>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={() => setCurrentPage("finder")}
              className={`px-2 sm:px-4 py-2 rounded-lg transition text-sm sm:text-base ${
                currentPage === "finder"
                  ? "bg-purple-600 text-white"
                  : darkMode
                    ? "hover:bg-gray-700"
                    : "hover:bg-gray-100"
              }`}
            >
              Discover
            </button>

            <button
              onClick={() => setCurrentPage("watchlist")}
              className={`px-2 sm:px-4 py-2 rounded-lg transition flex items-center gap-1 sm:gap-2 text-sm sm:text-base ${
                currentPage === "watchlist"
                  ? "bg-purple-600 text-white"
                  : darkMode
                    ? "hover:bg-gray-700"
                    : "hover:bg-gray-100"
              }`}
            >
              <List className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Watchlist</span>
              <span className="sm:hidden">({watchlistCount})</span>
              <span className="hidden sm:inline">({watchlistCount})</span>
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${
                darkMode
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {darkMode ? (
                <Sun className="w-4 h-4 sm:w-5 sm:h-5" />
              ) : (
                <Moon className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
