import React, { useState } from "react";
import cn from "classnames";
import styles from "./Trainer.module.sass";
import Item from "./Item";

const items = [
  {
    name: "Giorgio",
    type: "Cliente Palestra",
    avatar: "/images/content/avatar-5.png",
    review: [
      {
        author: "Giorgio",
        description: "Cliente Palestra",
        logo: "/images/logo1.png",
        image: "/images/content/trainer-pic.png",
        image2x: "/images/content/trainer-pic@2x.png",
        comment:
          "I professionisti di Teleios riescono a capire le mie esigenze e a darmi indicazioni precise su come migliorare il mio corpo.",
      },
    ],
  },
  {
    name: "Caterina",
    type: "Cliente Nutrizione",
    avatar: "/images/content/avatar-6.png",
    review: [
      {
        author: "Caterina",
        description: "Cliente Nutrizione",
        logo: "/images/logo1.png",
        image: "/images/content/trainer-pic.png",
        image2x: "/images/content/trainer-pic@2x.png",
        comment:
          "Il piano nutrizionale che ho ricevuto è molto chiaro e mi ha aiutato a migliorare il mio fisico nel giusto tempo",
      },
    ],
  },
  {
    name: "Carlo",
    type: "Cliente Palestra",
    avatar: "/images/content/avatar-2.png",
    review: [
      {
        author: "Carlo",
        description: "Cliente Palestra",
        logo: "/images/logo1.png",
        image: "/images/content/trainer-pic.png",
        image2x: "/images/content/trainer-pic@2x.png",
        comment:
          "E' incredibile come con 3 volte a settimana sono riuscito a migliorare il mio fisico sul medio periodo.",
      },
    ],
  },
  {
    name: "Sara",
    type: "Cliente Nutrizione",
    avatar: "/images/content/avatar-3.png",
    review: [
      {
        author: "Sara",
        description: "Cliente Nutrizione",
        logo: "/images/logo1.png",
        image: "/images/content/trainer-pic.png",
        image2x: "/images/content/trainer-pic@2x.png",
        comment:
          "E'stato incredibile come in 4 mesi sia riuscita a migliorare completamente il mio fisico, davvero grazie ai professionisti di Teleios.",
      },
    ],
  },
];

const Trainer = ({ className }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className={cn(styles.section, className)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.list}>
          {items[activeIndex].review.map((x, index) => (
            <Item item={x} key={index} />
          ))}
        </div>
        <div className={styles.nav}>
          {items.map((x, index) => (
            <div
              className={cn(styles.link, {
                [styles.active]: index === activeIndex,
              })}
              onClick={() => setActiveIndex(index)}
              key={index}
            >
              <div className={styles.avatar}>
                <img src={x.avatar} alt="Avatar" />
              </div>
              <div className={styles.details}>
                <div className={styles.man}>{x.name}</div>
                <div className={styles.position}>{x.type}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trainer;
