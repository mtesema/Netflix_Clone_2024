import React from 'react'
import '../HomeScreen/HomeScreen.css'
import Nav from '../Nav/Nav'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'

function HomeScreen() {
  return (
    <>
      <Nav />
      <Banner />
      {/* <Rows /> */}
      <Footer />
    </>
  );
}

export default HomeScreen