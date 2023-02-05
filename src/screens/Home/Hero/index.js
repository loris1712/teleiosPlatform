import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Hero.module.sass";
import Image from "../../../components/Image";
import ScrollButton from "../../../components/ScrollButton";
import ScrollParallax from "../../../components/ScrollParallax";

const Hero = ({ scrollToRef }) => {
  return (
    <div className={styles.hero}>
      <div className={cn("container", styles.container)}>
        <ScrollParallax className={styles.wrap}>
          <div className={cn("stage", styles.stage)}>
          Mangia bene. Allenati meglio
          </div>
          <h1 className={cn("h1", styles.title)}>
            Allenamento, nutrizione, benessere.
          </h1>
          <div className={styles.text}>
          Scegli la tipologia, fornisci le tue informazioni e i nostri professionisti creeranno la tua scheda per te.
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
        </ScrollParallax>
        <ScrollButton
          onScroll={() =>
            scrollToRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className={styles.scroll}
        />
        {/*<div className={styles.gallery}>
          <ScrollParallax className={styles.preview} animateIn="fadeInUp">
            <Image
              srcSet="/images/content/watch@2x.png 2x"
              srcSetDark="/images/content/watch-dark@2x.png 2x"
              src="/images/content/watch.png"
              srcDark="/images/content/watch-dark.png"
              alt="Watch"
            />
          </ScrollParallax>
          <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            delay={900}
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
              srcSet="/images/content/bottle@2x.png 2x"
              src="/images/content/bottle.png"
              alt="Bottle"
            />
          </ScrollParallax>
          <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            delay={1200}
          >
            <img
              srcSet="/images/content/ball-black@2x.png 2x"
              src="/images/content/ball-black.png"
              alt="Ball black"
            />
          </ScrollParallax>
        </div>*/}
      </div>
    </div>
  );
};

export default Hero;
