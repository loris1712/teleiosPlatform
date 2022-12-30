import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Hero.module.sass";
import ScrollButton from "../../../components/ScrollButton";
import Image from "../../../components/Image";
import ScrollParallax from "../../../components/ScrollParallax";

const Hero = ({ scrollToRef }) => {
  return (
    <div className={styles.hero}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <div className={cn("stage", styles.stage)}>
            Mangia bene. Allenati meglio
          </div>
          <h1 className={cn("h1", styles.title)}>
            La piattaforma ideale per il tuo corpo
          </h1>
          <div className={styles.text}>
          Crea la tua scheda nutrizione e la scheda palestra su misura per te con i migliori professionisti.
          </div>
          <div className={styles.btns}>
            <Link className={cn("button-2", styles.button)} to="/program2">
              Scheda Palestra
            </Link>
            <Link className={cn("button-2", styles.button)} to="/program">
              Scheda Nutrizione
            </Link>
          </div>
          <div className={styles.btns}>
            <Link className={cn("button-3", styles.button)} to="/program">
              Scheda Palestra + Nutrizione
            </Link>
          </div>
        </div>
        <ScrollButton
          onScroll={() =>
            scrollToRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className={styles.scroll}
        />
        <div className={styles.gallery}>
          <div className={styles.preview}>
            <Image
              srcSet="/images/content/main-pic@2x.png 2x"
              srcSetDark="/images/content/main-pic-dark@2x.png 2x"
              src="/images/content/main-pic.png"
              srcDark="/images/content/main-pic-dark.png"
              alt="Main"
            />
          </div>
          <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            delay={300}
          >
            <img
              srcSet="/images/content/ball@2x.png 2x"
              src="/images/content/ball.png"
              alt="Ball"
            />
          </ScrollParallax>
          <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            delay={600}
          >
            <img
              srcSet="/images/content/ball-black@2x.png 2x"
              src="/images/content/ball-black.png"
              alt="Ball"
            />
          </ScrollParallax>
        </div>
      </div>
    </div>
  );
};

export default Hero;
