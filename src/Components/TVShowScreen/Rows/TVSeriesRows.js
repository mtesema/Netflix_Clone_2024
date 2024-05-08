import React from "react";
import { useState, useEffect } from "react";
import TVSeriesRowProps from "./RowProps/TVSeriesRowProps";
import requests from "../../../Axios/Request";
import "../Style/TVShowScreen.css";

function TVSeriesRows({selectedGenre}) {
  return (
    <>
      <div className="row_series_container">
        <TVSeriesRowProps
          title="Top Rated TV Shows"
          fetchUrl={requests.fetchTVShowsTopRated}
          isLargeRow
          selectedGenre={selectedGenre} // Pass selectedGenre to TVSeriesRowProps
        />
        <TVSeriesRowProps
          title="On The Air TV Shows"
          fetchUrl={requests.fetchTVShowsOnTheAir}
          isLargeRow
          selectedGenre={selectedGenre} // Pass selectedGenre to TVSeriesRowProps
        />
        <TVSeriesRowProps
          title="Netflix Originals"
          fetchUrl={requests.fetchNetflixOriginalsTvShows}
          isLargeRow
          selectedGenre={selectedGenre} // Pass selectedGenre to TVSeriesRowProps
        />
        <TVSeriesRowProps
          title="Comedy TV Shows"
          fetchUrl={requests.fetchComedyTVShows}
          isLargeRow
          selectedGenre={selectedGenre} // Pass selectedGenre to TVSeriesRowProps
        />
        <TVSeriesRowProps
          title="Airing Today TV Shows"
          fetchUrl={requests.fetchTVShowsAiringToday}
          isLargeRow
          selectedGenre={selectedGenre} // Pass selectedGenre to TVSeriesRowProps
        />
        <TVSeriesRowProps
          title="Sci-Fi & Fantasy"
          fetchUrl={requests.fetchSciFiandFantasy}
          isLargeRow
          selectedGenre={selectedGenre} // Pass selectedGenre to TVSeriesRowProps
        />

        <TVSeriesRowProps
          title="TV Shows"
          fetchUrl={requests.fetchTVShowsPopular}
          isLargeRow
          selectedGenre={selectedGenre} // Pass selectedGenre to TVSeriesRowProps
        />
        <TVSeriesRowProps
          title="Action & Adventure TV Shows"
          fetchUrl={requests.fetchActionandAdventureTVShows}
          isLargeRow
          selectedGenre={selectedGenre} // Pass selectedGenre to TVSeriesRowProps
        />
      </div>
    </>
  );
}

export default TVSeriesRows;
