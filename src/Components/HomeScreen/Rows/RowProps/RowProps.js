import React from "react";
import Rows from "../Rows";
import { useState, useEffect } from "react";
import axiosLocal from "../../../../Axios/Axios";
import "../Style/Row.css";

function RowProps(props) {
  const { title, fetchUrl, isLargeRow = false } = props;

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axiosLocal.get(fetchUrl);
      // console.log(request.data)
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  // console.log(movies);

  const base_url = "https://image.tmdb.org/t/p/w500/";

  return (
    <div className="row_line">
      <h2>{title}</h2>

      <div className="container-fluid">
        <div className="row">
          <div className="row_posters d-flex">
            {movies.map(
              (movie) =>
                ((isLargeRow && movie.poster_path) ||
                  (!isLargeRow && movie.backdrop_path)) && (
                  <img
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    key={movie.id}
                    src={`${base_url}${
                      isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`}
                    alt={movie.name}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RowProps;
