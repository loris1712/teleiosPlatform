import React, { useState } from "react";
import cn from "classnames";
import styles from "./Faq.module.sass";
import Item from "./Item";
import Dropdown from "../../../components/Dropdown";

const items = [
  {
    title: "General",
    items: [
      {
        title: "Quali piani sono disponibili?",
        text: "Hai a disposizione i piani singoli per entrambe le tipologie di schede (Nutrizione, Palestra) oppure i piani misti che comprendono Nutrizione + Palestra.",
      },
      {
        title: "Come faccio ad iniziare un piano di allenamento?",
        text: "Puoi andare sulla voce in alto nel menu Crea la tua scheda, selezionare Nutrizione, Palestra oppure Entrambe. Successivamente puoi rispondere alle domande della scheda ed entro 24 ore riceverai la tua scheda direttamente via email.",
      },
      {
        title: "Come entro in contatto con un professionista?",
        text: "Puoi contattarci via email oppure utilizzare la call di Presentazione di 15 minuti che si ha a disposizione per poter conoscere gli esperti e organizzare un piano di lavoro.",
      },
      {
        title: "In che modo è possibile pagare?",
        text: "Attraverso carta di credito o di debito, apple pay e google pay. Utilizziamo la piattaforma Stripe per assicurare pagamenti sicuri e protetti.",
      },
      {
        title: "E' possibile disdire il piano di abbonamento?",
        text: "I nostri piani hanno la durata di 1, 3 oppure 6 mesi, dopo la scadenza del piano è possibile rinnovarlo oppure no. Il rinnovo non è automatico ma il cliente in totale autonomia sceglie liberamente se acquistare un altro piano. Durante i mesi in cui il piano è attivo non è possibile disdire il piano in corso.",
      },
    ],
  },
];

const Team = () => {
  const options = [];
  items.map((x) => options.push(x.title));
  items.map((x) => options.push(x.text));

  const [category, setCategory] = useState(options[0]);

  return (
    <div className={cn("section-border-top", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.top}>
          <div className={cn("stage-small", styles.stage)}>
            scopri come iniziare
          </div>
          <h2 className={cn("h2", styles.title)}>Domande frequenti</h2>
          <div className={styles.info}>
            Se vuoi ricevere notizie e aggiornamenti riguardo l'espansione di Teleios <a href="/contact">Contattaci ora</a>
          </div>
          <div className={styles.nav}>
            {items.map((x, index) => (
              <button
                className={cn(styles.btn, {
                  [styles.active]: x.title === category,
                })}
                onClick={() => setCategory(x.title)}
                key={index}
              >
                {x.title}
              </button>
            ))}
          </div>
          <Dropdown
            className={styles.dropdown}
            value={category}
            setValue={setCategory}
            options={options}
          />
        </div>
        <div className={styles.list}>
          {items
            .find((x) => x.title === category)
            .items.map((x, index) => (
              <Item item={x} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
