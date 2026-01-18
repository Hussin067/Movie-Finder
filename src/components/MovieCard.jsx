import { Heart, SkipForward, Film } from 'lucide-react';

function MovieCard({ movie, darkMode, onAddToWatchlist, onSkip, isInWatchlist }) {
  
  const IMAGE_BASE = 'https://image.tmdb.org/t/p/w500';
  
  return (
    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-xl overflow-hidden`}>
      <div className="md:flex">
        
    
        <div className="md:w-1/3">
          {movie.poster_path ? (
            <img
              src={`${IMAGE_BASE}${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-96 bg-gray-300 flex items-center justify-center">
              <Film className="w-20 h-20 text-gray-400" />
            </div>
          )}
        </div>
        
        <div className="md:w-2/3 p-8">
          <h2 className="text-3xl font-bold mb-2">{movie.title}</h2>
          
          <div className="flex items-center gap-4 mb-4 text-sm">
            <span className="bg-purple-600 text-white px-3 py-1 rounded-full">
              ⭐ {movie.vote_average?.toFixed(1)}
            </span>
            <span>{movie.release_date?.split('-')[0]}</span>
          </div>
          
          <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {movie.overview || 'No overview available.'}
          </p>
          
          <div className="flex gap-4">
            <button
              onClick={onAddToWatchlist}
              disabled={isInWatchlist}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition ${
                isInWatchlist
                  ? darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-300 text-gray-500'
                  : 'bg-purple-600 text-white hover:bg-purple-700'
              }`}
            >
              <Heart className="w-5 h-5" fill={isInWatchlist ? 'currentColor' : 'none'} />
              {isInWatchlist ? 'In Watchlist' : 'Add to Watchlist'}
            </button>
            
            <button
              onClick={onSkip}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition ${
                darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              <SkipForward className="w-5 h-5" />
              Skip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;