const API_KEY = 'a707347b50928d7f70b4dd65cce44215';
const BASE_URL = 'https://api.themoviedb.org/3';

/**
 * Fetch a random movie based on filters
 * @param {string} genreId - The genre ID (empty string for all genres)
 * @param {object} yearRange - Object with min and max year {min: 1990, max: 2024}
 * @param {number} minRating - Minimum rating (0-10)
 * @returns {Promise<object>} - Returns a random movie object
 */
export const fetchRandomMovie = async (genreId, yearRange, minRating = 0) => {
  try {
    
    const randomPage = Math.floor(Math.random() * 10) + 1;
    
    
    const genreParam = genreId ? `&with_genres=${genreId}` : '';
    
    
    const ratingParam = minRating > 0 ? `&vote_average.gte=${minRating}` : '';
    
    
    const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&page=${randomPage}${genreParam}&primary_release_date.gte=${yearRange.min}-01-01&primary_release_date.lte=${yearRange.max}-12-31${ratingParam}&sort_by=popularity.desc&vote_count.gte=100`;
    
    const response = await fetch(url);
    
  
    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }
    
    const data = await response.json();
    
    if (data.results && data.results.length > 0) {
      
      const randomIndex = Math.floor(Math.random() * data.results.length);
      return data.results[randomIndex];
    } else {
      throw new Error('No movies found with these filters');
    }
    
  } catch (error) {
    console.error('Error fetching movie:', error);
    throw error;
  }
};