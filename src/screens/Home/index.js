import React, { useRef } from "react";
// import styles from "./Home.module.sass";
import Hero from "./Hero";
import Clients from "../../components/Clients";
import Steps from "./Steps";
import FirstAfter from "./FirstAfter";
import CalendlyBook from "./CalendlyBook";
import Intro from "../../components/Intro";
import Book2 from "../../components/Book";
import Book from "./Book";
import ValueProps from "../../components/ValueProps";
import About from "./About";
import Team from "./Team";
import Review from "../../components/Review";
import Quality from "./Quality";
import Advantages from "../../components/Advantages";
import Workouts from "../../components/Workouts";
import Offer from "../../components/Offer";
import Faq from "./Faq";

const Home = () => {
  const scrollToRef = useRef(null);

  return (
    <>
      <Hero scrollToRef={scrollToRef} />
      <Book2 />
      {/*<Clients />*/}
      <Steps scrollToRef={scrollToRef} />
      <CalendlyBook />
      <Intro />
      <Review />
      <Book />
      <FirstAfter />
      <ValueProps className="section" />
      <Team />
      <Workouts />
      <Faq />
    </>
  );
};

export default Home;
