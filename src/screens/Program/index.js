import React, { useRef } from "react";
// import styles from "./Home.module.sass";
import Hero from "./Hero";
import Book2 from "../../components/Book";
import Steps from "./Steps";

const Program = () => {
  const scrollToRef = useRef(null);

  return (
    <>
      <Hero scrollToRef={scrollToRef} />
      <Book2></Book2>
    </>
  );
};

export default Program;
