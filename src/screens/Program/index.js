import React, { useRef } from "react";
// import styles from "./Home.module.sass";
import Hero from "./Hero";
import Steps from "./Steps";

const Program = () => {
  const scrollToRef = useRef(null);

  return (
    <>
      <Hero scrollToRef={scrollToRef} />
    </>
  );
};

export default Program;
