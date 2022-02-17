import React from "react";
import Companies from "./components/Companies/Companies";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/header";
import HeroFour from "./components/HeroFour/HeroFour";
import HeroOne from "./components/HeroOne/HeroOne";
import HeroThree from "./components/HeroThree/HeroThree";
import HeroTwo from "./components/HeroTwo/HeroTwo";

function App() {
  return (
    <>
      <Header />
      <HeroOne />
      <HeroTwo />
      <HeroThree />
      <Companies />
      <HeroFour />
      <Footer />
    </>
  );
}

export default App;
