import { Heart, Film } from 'lucide-react';

function WatchlistPage({ darkMode, watchlist, removeFromWatchlist }) {
  
  const IMAGE_BASE = 'https://image.tmdb.org/t/p/w500';
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">My Watchlist</h2>
      
      {watchlist.length === 0 ? (
        
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-12 text-center`}>
          <Heart className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <p className="text-xl mb-2">Your watchlist is empty</p>
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
            Start discovering movies and add them to your watchlist🎬
          </p>
        </div>
      ) : (
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {watchlist.map(movie => (
            <div 
              key={movie.id} 
              className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg overflow-hidden`}
            >
              
              {movie.poster_path ? (
                <img
                  src={`${IMAGE_BASE}${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-72 object-cover"
                />
              ) : (
                <div className="w-full h-72 bg-gray-300 flex items-center justify-center">
                  <Film className="w-12 h-12 text-gray-400" />
                </div>
              )}
              
            
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{movie.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm">⭐ {movie.vote_average?.toFixed(1)}</span>
                  <button
                    onClick={() => removeFromWatchlist(movie.id)}
                    className="text-red-500 hover:text-red-700 transition font-medium"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default WatchlistPage;