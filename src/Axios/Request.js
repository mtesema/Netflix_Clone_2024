//Typically we use axios to make http requests

//We need to import axios in our project

 


const API_KEY = process.env.REACT_APP_AXIOS_API_KEY;

 

const requests = {


  //Requesst for all movies

  fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US`,

  fetchTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,

  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,

  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,

  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,

  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,

  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,

  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,

  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,

  fetchGames: `/discover/movie?api_key=${API_KEY}&with_genres=16`,




  //Request for specific TV shows

  fetchTVShowsTopRated: `/tv/top_rated?api_key=${API_KEY}&language=en-US&query=YOUR_SEARCH_QUERY&page=1&include_adult=false`,

  fetchTVShowsPopular: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`,

  fetchTVShowsOnTheAir: `/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`,

  fetchTVShowsAiringToday: `/tv/airing_today?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`,

  fetchComedyTVShows: `/discover/tv?api_key=${API_KEY}&with_genres=35`,

  fetchSciFiandFantasy: `/discover/tv?api_key=${API_KEY}&with_genres=10765`,

  fetchActionandAdventureTVShows: `/discover/tv?api_key=${API_KEY}&with_genres=10759`,

  fetchNetflixOriginalsTvShows: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
};

export default requests;
