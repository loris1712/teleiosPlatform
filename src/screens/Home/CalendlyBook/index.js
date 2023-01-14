import {useRef, useEffect, React} from "react";
import cn from "classnames";
import styles from "./Steps.module.sass";
import stylesIndex from "./index.scss";
import ScrollParallax from "../../../components/ScrollParallax";
import ImageCompare from "image-compare-viewer";
import { InlineWidget } from 'react-calendly';


const Steps = ({ scrollToRef }) => {

  return (
    <div className={cn("section", styles.section)} ref={scrollToRef}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h2 className={cn("h2", styles.title)}>Apuuntamento</h2>
          <div className={styles.info}>
            Prenota la tua chiamata di presentazione. Potrai conoscere i nostri esperti dal vivo e organizzare con loro il tuo piano ideale. 
          </div>
        </div>
        <InlineWidget url="https://calendly.com/teleios-platform" />
      </div>
    </div>
  );
};

export default Steps;
