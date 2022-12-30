import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import styles from "./Lifestyle.module.sass";
import Icon from "../../../components/Icon";
import ScrollParallax from "../../../components/ScrollParallax";

const items = [
  {
    title: "La filosofia di Teleios",
    image: "/images/content/lifestyle-pic-1.png",
    image2x: "/images/content/lifestyle-pic-1@2x.png",
    content:
      "Che tu sia un principiante assoluto o desideri intensificare la tua routine, ottieni l'esperienza completa in studio a casa o in palestra con Teleios.",
  },
  {
    title: "Crea rapidamente il programma che fa per te",
    image: "/images/content/lifestyle-pic-2.png",
    image2x: "/images/content/lifestyle-pic-2@2x.png",
    content:
      "In pochi passaggi puoi inviare tutte le richieste ai nostri professionisti per ricevere un programma dedicato.",
  },
  {
    title: "Insieme a noi tieni traccia dei tuoi progressi",
    image: "/images/content/lifestyle-pic-3.png",
    image2x: "/images/content/lifestyle-pic-3@2x.png",
    content:
      "Con il giusto tempo raggiungerai i tuoi obiettivi e noi ti aiuteremo a farlo e a monitorarli.",
  },
];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Lifestyle = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: (
      <SlickArrow>
        <Icon name="arrow-next" size="14" />
      </SlickArrow>
    ),
    prevArrow: (
      <SlickArrow>
        <Icon name="arrow-prev" size="14" />
      </SlickArrow>
    ),
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 100000,
        settings: "unslick",
      },
    ],
  };

  return (
    <div className={cn("section-pb", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <div className={cn("stage-small", styles.stage)}>Esplora la piattaforma</div>
          <h2 className={cn("h2", styles.title)}>Crea ora con la tua prima scheda</h2>
          <div className={styles.info}>
            Con un click inizi a compilare i campi, poi selezioni il pacchetto da seguire, ed entro 24 ore avrai il tuo programma su misura
          </div>
          <Link
            className={cn("button-stroke", styles.button)}
            to="/program3"
          >
            <span>Inizia subito</span>
            <Icon name="arrow-right" size="10" />
          </Link>
        </div>
        <div className={styles.wrap}>
          <Slider
            className={cn("lifestyle-slider", styles.slider)}
            {...settings}
          >
            {items.map((x, index) => (
              <ScrollParallax className={styles.item} key={index}>
                <div className={styles.row}>
                  <div className={styles.col}>
                    <div className={styles.details}>
                      <div className={styles.number}>0{index + 1}.</div>
                      <div className={styles.category}>{x.title}</div>
                      <div className={styles.content}>{x.content}</div>
                    </div>
                  </div>
                  <div className={styles.col}>
                    <img
                      srcSet={`${x.image2x} 2x`}
                      src={x.image}
                      alt="Lifestyle"
                    />
                  </div>
                </div>
              </ScrollParallax>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Lifestyle;
