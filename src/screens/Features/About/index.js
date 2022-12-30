import React from "react";
import cn from "classnames";
import styles from "./About.module.sass";
import Image from "../../../components/Image";
import ScrollParallax from "../../../components/ScrollParallax";

const items = [
  {
    title: "Design intuitivo e pulito",
    content:
      "Pronto all'utilizzo e veloce da utilizzare.",
    color: "#9757D7",
  },
  {
    title: "Un esercizio di semplicità",
    content:
      "Esercizi, programmi e diete su misura per le tue esigenze e i tuoi impegni.",
    color: "#EF466F",
  },
  {
    title: "Seguito/a da professionisti",
    content:
      "Dopo aver selezionato il pacchetto, i nostri professionisti saranno presenti durante il tuo percorso.",
    color: "#45B26B",
  },
];

const About = () => {
  return (
    <div className={cn("section", styles.book)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={cn("stage", styles.stage)}>teleios</div>
          </div>
          <div className={styles.col}>
            <h2 className={cn("h2", styles.title)}>
            Semplice, potente, <br></br>facile da usare
            </h2>
            <div className={styles.info}>
            Tieni traccia dei tuoi allenamenti, ottieni risultati migliori e sii la versione migliore
              di voi. Meno pensiero, più sollevamento.
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.list}>
              {items.map((x, index) => (
                <ScrollParallax className={styles.item} key={index}>
                  <div
                    className={styles.number}
                    style={{ backgroundColor: x.color }}
                  >
                    0{index + 1}
                  </div>
                  <div className={styles.subtitle}>{x.title}</div>
                  <div className={styles.content}>{x.content}</div>
                </ScrollParallax>
              ))}
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.bg}>
              <img
                srcSet="/images/content/about-pic-1@2x.png 2x"
                src="/images/content/about-pic-1.png"
                alt="About pic"
              />
              <div>
                <ScrollParallax className={styles.preview} animateIn="fadeInUp">
                  <Image
                    srcSet="/images/content/racket@2x.png 2x"
                    srcSetDark="/images/content/racket-dark@2x.png 2x"
                    src="/images/content/racket.png"
                    srcDark="/images/content/racket-dark.png"
                    alt="Rocket"
                  />
                </ScrollParallax>
                <ScrollParallax className={styles.preview} animateIn="fadeInUp">
                  <img
                    srcSet="/images/content/ball-red@2x.png 2x"
                    src="/images/content/ball-red.png"
                    alt="Ball"
                  />
                </ScrollParallax>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
