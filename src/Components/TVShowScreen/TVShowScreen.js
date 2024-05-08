import React, { useState } from "react";
import "./Style/TVShowScreen.css";
import TVSeriesNav from "./TVSeriesNav/TVSeriesNav";
import Rows from "./Rows/TVSeriesRows";
import Banner from "./TVSeriesBanner/TVSeriesBanner";
import Footer from "../HomeScreen/Footer/Footer"


function TVShowScreen() {

  return (
    <>
      <TVSeriesNav />
      <Banner />
      <Rows />
      <Footer />
    </>
  );
}

export default TVShowScreen;
