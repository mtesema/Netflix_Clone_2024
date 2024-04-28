import React from "react";
import { useEffect } from "react";
import "./Banner.css";
import requests from "./axios/Request"
import axios from "./axios/Axios";

function Banner() {


  // Retrive movies from the API
  const [movie, setMovie] = React.useState({});

 useEffect(() => {
    async function fetchData() {

      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
      ])
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);
     



  // Truncate the movie description
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };


  return (
    <>
      <header
        className="banner"
        style={{
          backgroundImage: `url("https://images.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          paddingTop: "20%",
        }}
      >
        <div className="banner_contents">
          <h1 className="banner_title">
            {movie?.name || movie?.original_name || movie?.title}
          </h1>
          <h1 className="banner_description">
            {truncate(movie?.overview, 150)}
          </h1>
          <div className="banner_buttons">
            <button className="banner_button_play">Play</button>
            <button className="banner_button_info">More Info.</button>
          </div>
        </div>

        <div className="banner_fadeBottom"></div>
      </header>
    </>
  );
}

export default Banner;
