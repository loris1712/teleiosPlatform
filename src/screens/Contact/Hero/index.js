import React from "react";
import cn from "classnames";
import styles from "./Hero.module.sass";
import Subscription from "../../../components/Subscription";
import Image from "../../../components/Image";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={cn("container", styles.container)}>
        <div className={styles.col}>
          <div className={styles.preview}>
            <Image
              srcSet="/images/content/download-pic@2x.png 2x"
              srcSetDark="/images/content/download-pic-dark@2x.png 2x"
              src="/images/content/download-pic.png"
              srcDark="/images/content/download-pic-dark.png"
              alt="Download bg"
            />
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.wrap}>
            <div className={cn("stage", styles.stage)}>
              Resta in contatto con noi
            </div>
            <h1 className={cn("h1", styles.title)}>
              Contattaci via email
            </h1>
            <div className={styles.text}>
            Teleios ti aiuta a creare una scheda adatta alle tue esigenze, raggiungere risultati e trovare la versione migliore di te stesso.
            </div>
            <a className={styles.buttonEmail} href  = "mailto: abc@example.com">Invia Email</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
