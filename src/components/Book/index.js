import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Book.module.sass";
import ScrollParallax from "../ScrollParallax";

const Book = ({ scrollToRef }) => {
  return (
    <div className={styles.section} ref={scrollToRef}>
      <div className={cn("container", styles.container)}>
      <div className={styles.gallery}>
          <ScrollParallax className={styles.preview} animateIn="fadeInUp">
            <img
              srcSet="/images/content/bag@2x.png 2x"
              src="/images/content/bag.png"
              alt="Bag"
            />
          </ScrollParallax>
          <ScrollParallax className={styles.preview} animateIn="fadeInUp">
            <img
              srcSet="/images/content/gloves@2x.png 2x"
              src="/images/content/gloves.png"
              alt="Gloves"
            />
          </ScrollParallax>
          <ScrollParallax className={styles.preview} animateIn="fadeInUp">
            <img
              srcSet="/images/content/bottle-1@2x.png 2x"
              src="/images/content/bottle-1.png"
              alt="Bottle"
            />
          </ScrollParallax>
        </div>
        <div className={styles.wrap}>
          <h2 className={cn("h1", styles.title)}>
            Prenota una chiamata gratuita con i nostri professionisti
          </h2>
          <a className={cn("button", styles.button)} href="https://calendly.com/teleios-platform" target="blank">
            Prenota la chiamta
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default Book;
