import React from "react";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";
import Missions from "../components/Missions";
import Contactbanner from "../components/Contactbanner";


function Home() {
  return (
    <>
      <Navbar />
      <Intro />
      <Missions />
      <Freebook />
      <Contactbanner />
      <Footer />
    </>
  );
}

export default Home;
