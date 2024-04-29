import React from 'react'
import RowProps from './RowProps/RowProps'
import requests from "../../Axios/Request";

function Rows() {
  return (
    <>
      <RowProps
        title="Netflex Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <RowProps title="Award Winning" fetchUrl={requests.fetchPopular} />
      <RowProps title="Trending Now" fetchUrl={requests.fetchTrending} />
      <RowProps title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <RowProps title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <RowProps title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <RowProps title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <RowProps title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <RowProps title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <RowProps title="Games" fetchUrl={requests.fetchGames} />
    </>
  );
}

export default Rows