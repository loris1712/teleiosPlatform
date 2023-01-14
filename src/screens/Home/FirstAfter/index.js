import {useRef, useEffect, React} from "react";
import cn from "classnames";
import styles from "./Steps.module.sass";
import stylesIndex from "./index.scss";
import ScrollParallax from "../../../components/ScrollParallax";
import ImageCompare from "image-compare-viewer";

const Steps = ({ scrollToRef }) => {

  const ref = useRef(null);
  
  useEffect(() => {
    // 👇️ use document.getElementById()
    const element = document.getElementById("image-compare");
    console.log(element);

    const viewer = new ImageCompare(element).mount();
  }, []);

  
  return (
    <div className={cn("section", styles.section)} ref={scrollToRef}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h2 className={cn("h2", styles.title)}>Prima e Dopo</h2>
          <div className={styles.info}>
            Teleios ti aiuta a migliorare giorno dopo giorno, i migliori professionisti a tua disposizione.
          </div>
        </div>
        <div id="image-compare">
          <img src="/images/content/cliente_roberto_prima.jpeg" alt="" />
          <img src="/images/content/cliente_roberto_dopo.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Steps;
