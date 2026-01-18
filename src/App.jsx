import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import FilterPanel from "./components/FilterPanel";
import MovieCard from "./components/MovieCard";
import WatchlistPage from "./pages/WatchList";
import { fetchRandomMovie } from "./services/movieApi";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState("finder");
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [watchlist, setWatchlist] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [yearRange, setYearRange] = useState({ min: 1990, max: 2026 });
  const [minRating, setMinRating] = useState(0);

  const getRandomMovie = async () => {
    setLoading(true);
    setError("");

    try {
      const randomMovie = await fetchRandomMovie(selectedGenre, yearRange , minRating);
      setMovie(randomMovie);
    } catch (err) {
      setError(err.message || "Failed to fetch movie. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const addToWatchlist = () => {
    if (movie && !watchlist.find((m) => m.id === movie.id)) {
      setWatchlist([...watchlist, movie]);
    }
  };

  const removeFromWatchlist = (movieId) => {
    setWatchlist(watchlist.filter((m) => m.id !== movieId));
  };

  const isInWatchlist = movie && watchlist.find((m) => m.id === movie.id);

  return (
    <div
      className={`min-h-screen transition-colors ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-purple-50 to-pink-50 text-gray-900"
      }`}
    >
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        watchlistCount={watchlist.length}
      />

      <main>
        {currentPage === "finder" ? (
          <div className="max-w-6xl mx-auto px-4 py-8">
            <FilterPanel
              darkMode={darkMode}
              selectedGenre={selectedGenre}
              setSelectedGenre={setSelectedGenre}
              yearRange={yearRange}
              setYearRange={setYearRange}
              minRating={minRating}
              setMinRating={setMinRating}
              onGenerate={getRandomMovie}
              loading={loading}
            />

            {error && (
              <div className="bg-red-500 text-white px-6 py-4 rounded-lg mb-8">
                {error}
              </div>
            )}

            {loading ? (
              <div className="text-center py-20">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-purple-600 border-t-transparent"></div>
                <p className="mt-4 text-lg">Finding your perfect movie...</p>
              </div>
            ) : movie ? (
              <MovieCard
                movie={movie}
                darkMode={darkMode}
                onAddToWatchlist={addToWatchlist}
                onSkip={getRandomMovie}
                isInWatchlist={isInWatchlist}
              />
            ) : (
              <div
                className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-lg shadow-lg p-12 text-center`}
              >
                <div className="text-6xl mb-4">🎬</div>
                <h3 className="text-2xl font-bold mb-2">
                  Ready to Discover Movies?
                </h3>
                <p
                  className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}
                >
                  Select your preferences above and click "Generate Random
                  Movie" to get started!
                </p>
              </div>
            )}
          </div>
        ) : (
          <WatchlistPage
            darkMode={darkMode}
            watchlist={watchlist}
            removeFromWatchlist={removeFromWatchlist}
          />
        )}
      </main>
    </div>
  );
}

export default App;
