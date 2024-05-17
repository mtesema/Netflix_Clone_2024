import React from "react";
import { useState, useEffect } from "react";
import axiosLocal from "../../../../Axios/Axios";
import "../Style/TVSeriesRow.css";


function TVSeriesRowProps(props) {
  const { title, fetchUrl, isLargeRow = false } = props;
  const [series, setTVSeries] = useState([]);


  useEffect(() => {
    async function fetchData() {
      const request = await axiosLocal.get(fetchUrl);
      // console.log("requested data" , request.data)
      setTVSeries(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);


  const base_url = "https://image.tmdb.org/t/p/w500/";

  return (
    <>
      <div>
        <div className="row_line_series">
          <h2>{title}</h2>

          <div className="container-fluid">
            <div className="row">
              <div className="row_posters_series d-flex">
                {series.map(
                  (movie) =>
                    ((isLargeRow && movie.poster_path) ||
                      (!isLargeRow && movie.backdrop_path)) && (
                      <img
                        className={`row_poster_series ${
                          isLargeRow && "row_posterLargeseries"
                        }`}
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
      </div>

    </>
  );
}

export default TVSeriesRowProps;
