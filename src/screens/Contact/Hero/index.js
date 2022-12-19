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
              srcSet="https://img.freepik.com/free-photo/young-muscular-athlete-practicing-gym-with-weights_155003-35492.jpg?w=1060&t=st=1671492926~exp=1671493526~hmac=138bb0b4b229db7277cea3ebe0f872b09e318df61ed3395bb26d1fe8e872f0a8 2x"
              srcSetDark="https://img.freepik.com/free-photo/young-muscular-athlete-practicing-gym-with-weights_155003-35492.jpg?w=1060&t=st=1671492926~exp=1671493526~hmac=138bb0b4b229db7277cea3ebe0f872b09e318df61ed3395bb26d1fe8e872f0a8 2x"
              src="https://img.freepik.com/free-photo/young-muscular-athlete-practicing-gym-with-weights_155003-35492.jpg?w=1060&t=st=1671492926~exp=1671493526~hmac=138bb0b4b229db7277cea3ebe0f872b09e318df61ed3395bb26d1fe8e872f0a8"
              srcDark="https://img.freepik.com/free-photo/young-muscular-athlete-practicing-gym-with-weights_155003-35492.jpg?w=1060&t=st=1671492926~exp=1671493526~hmac=138bb0b4b229db7277cea3ebe0f872b09e318df61ed3395bb26d1fe8e872f0a8"
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
