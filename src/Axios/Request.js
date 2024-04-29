//Typically we use axios to make http requests
//We need to import axios in our project

const API_KEY =  "1aae303723b2affffbb0f152604b55bd"


const requests = {
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
}

export default requests;

// `https://api.themoviedb.org/3${url}?api_key=${API_KEY}&language=en-US`

//https://api.themoviedb.org/3/discover/movie?api_key=1aae303723b2affffbb0f152604b55bd&with_genres=16