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
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Film className="w-8 h-8 text-purple-600" />
          <h1 className="text-2xl font-bold">RandomMovie</h1>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setCurrentPage("finder")}
            className={`px-4 py-2 rounded-lg transition ${
              currentPage === "finder"
                ? "bg-purple-600 text-white"
                : darkMode
                  ? "hover:bg-gray-700"
                  : "hover:bg-gray-100"
            }`}
          >
            Movie Finder
          </button>

          <button
            onClick={() => setCurrentPage("watchlist")}
            className={`px-4 py-2 rounded-lg transition flex items-center gap-2 ${
              currentPage === "watchlist"
                ? "bg-purple-600 text-white"
                : darkMode
                  ? "hover:bg-gray-700"
                  : "hover:bg-gray-100"
            }`}
          >
            <List className="w-5 h-5" />
            Watchlist ({watchlistCount})
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
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
