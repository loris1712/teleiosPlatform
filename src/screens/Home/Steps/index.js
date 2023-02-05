import React from "react";
import cn from "classnames";
import styles from "./Steps.module.sass";
import ScrollParallax from "../../../components/ScrollParallax";

const items = [
  {
    title: "Scegli la tipologia",
    color: "#3772FF",
    images: "/images/content/download.svg",
    content:
      "Puoi selezionare la scheda palestra, nutrizione oppure entrambe.",
  },
  {
    title: "Compila la scheda",
    color: "#9757D7",
    images: "/images/content/whistle.svg",
    content:
      "Inserisci tutte le informazioni utili ai fini di ricevere una scheda personalizzata",
  },
  {
    title: "Effettua il pagamento",
    color: "#EF466F",
    images: "/images/content/medal.svg",
    content:
      "Revisiona tutte le tue informazioni e scegli tra il pacchetto Silver, Gold, Platinum.",
  },
  {
    title: "Ricevi la scheda",
    color: "#45B26B",
    images: "/images/content/stopwatch.svg",
    content:
      "Entro massimo 24 ore i nostri professionisti creeeranno la scheda su misura per te e potrai subito utilizzarla con il loro supporto.",
  },
];

const Steps = ({ scrollToRef }) => {
  return (
    <div className={cn("section", styles.section)} ref={scrollToRef}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h2 className={cn("h2", styles.title)}>Come funziona</h2>
          <div className={styles.info}>
            Crea la tua scheda palestra e nutrizione su misura per te in pochi
            passaggi.
          </div>
        </div>
        <div className={styles.list}>
          {items.map((x, index) => (
            <ScrollParallax className={styles.item} key={index}>
              <div
                className={styles.preview}
                style={{ backgroundColor: x.color }}
              >
                <img src={x.images} alt={`Step ${index}`} />
              </div>
              <div className={styles.number}>Step {index + 1}</div>
              <div className={styles.subtitle}>{x.title}</div>
              <div className={styles.content}>{x.content}</div>
            </ScrollParallax>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;
