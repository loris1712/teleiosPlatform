import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Workouts.module.sass";
import Image from "../Image";
import ScrollParallax from "../ScrollParallax";

const items = [
  "Creazione scheda automatica",
  "Su misura per te",
  "Palestra e nutrizione",
  "Supporto degli esperti",
  "Rinnovi quando vuoi",
];

const Workouts = () => {
  return (
    <div className={styles.section}>
      <div className={cn("container", styles.container)}>
        <div className={styles.gallery}>
          <div className={styles.preview}>
            <Image
              srcSet="/images/content/phones@2x.png 2x"
              srcSetDark="/images/content/phones-dark@2x.png 2x"
              src="/images/content/phones.png"
              srcDark="/images/content/phones-dark.png"
              alt="Phones"
            />
          </div>
          <ScrollParallax className={styles.preview} animateIn="fadeInUp">
            <img
              srcSet="/images/content/ball-green-1@2x.png 2x"
              src="/images/content/ball-green-1.png"
              alt="Gloves"
            />
          </ScrollParallax>
          <ScrollParallax className={styles.preview} animateIn="fadeInUp">
            <img
              srcSet="/images/content/apple@2x.png 2x"
              src="/images/content/apple.png"
              alt="Apple"
            />
          </ScrollParallax>
        </div>
        <div className={styles.wrap}>
          <h2 className={cn("h2", styles.title)}>
            Inizia il tuo percorso ora, <br></br>crea la tua scheda
          </h2>
          <div className={styles.info}>
            Teleios ti aiuta a creare una scheda adatta alle tue esigenze, raggiungere risultati e trovare la versione migliore di te stesso.
          </div>
          <ul className={styles.list}>
            {items.map((x, index) => (
              <li className={styles.item} key={index}>
                {x}
              </li>
            ))}
          </ul>
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
      </div>
    </div>
  );
};

export default Workouts;
