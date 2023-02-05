import React, { useState } from "react";
import cn from "classnames";
import styles from "./Plan.module.sass";
import Icon from "../../../components/Icon";

const options = [
  {
    title: "Principali caratteristiche",
    items: [
      {
        title: "Supporto WhatsApp",
        description: "Il professionista ti seguirà durante la settimana",
      },
    ],
  },
];

const data = [
  {
    title: "Silver",
    color: "#9757D7",
    description: "1 mese",
    price: "64",
    note: "-",
    button: "Crea la scheda",
    options: [
      "true",
      "true",
      "true",
      "false",
      "true",
      "true",
      "false",
      "false",
      "false",
      "false",
    ],
  },
  {
    title: "Gold",
    color: "#FF592C",
    description: "3 mesi",
    price: "164 ",
    note: "Invece di € 192",
    button: "Crea la scheda",
    options: [
      "true",
      "true",
      "true",
      "true",
      "true",
      "true",
      "true",
      "true",
      "false",
      "false",
    ],
  },
  {
    title: "Platinum",
    color: "#EF466F",
    price: "269",
    description: "6 mesi",
    note: "Invece di € 384",
    button: "Crea la scheda",
    options: [
      "true",
      "true",
      "true",
      "true",
      "true",
      "true",
      "true",
      "true",
      "true",
      "true",
    ],
  },
];

const Plan = () => {
  const [more, setMore] = useState([false, false, false]);

  const handleClick = (index) => {
    let newMore = [...more];
    newMore[index] = !more[index];

    setMore(newMore);
  };

  const renderContent = (content) => {
    if (content === "true") {
      return <Icon name="check" size="14" />;
    }
    if (content === "false") {
      return <div className={styles.minus}>-</div>;
    }
    return <div className={styles.minus}>{content}</div>;
  };

  return (
    <div className={cn("section-bg", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={cn("stage", styles.stage)}>
        DIVENTA PIÙ FORTE CON TELEIOS
        </div>
        <h1 className={cn("h1", styles.title)}>
        Scegli il piano adatto a te
        </h1>
        <div className={styles.table}>
          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.head}></div>
              <div className={styles.body}>
                {options.map((option, index) => (
                  <div className={styles.item} key={index}>
                    <div className={styles.category}>{option.title}</div>
                    {option.items.map((item, index) => (
                      <div className={styles.parameter} key={index}>
                        <div className={styles.label}>{item.title}</div>
                        <div className={styles.hint}>
                          <Icon name="info" size="10" />
                          <div className={styles.tooltip}>
                            {item.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            {data.map((type, index) => (
              <div className={styles.col} key={index}>
                <div className={styles.head}>
                  <div className={styles.package} style={{ color: type.color }}>
                    {type.title}
                  </div>
                  <div className={styles.description}>{type.description}</div>
                  {type.price && (
                    <>
                      <div className={styles.cost}>
                        <span className={styles.sign}>€</span>{" "}
                        <span className={styles.price}>{type.price}</span>
                      </div>
                      <div className={styles.note}>{type.note}</div>
                    </>
                  )}
                </div>
                <div className={styles.body}>
                  <div
                    className={cn(styles.more, {
                      [styles.active]: more[index],
                    })}
                    onClick={() => handleClick(index)}
                  >
                    Vedi tutti i vantaggi
                    <Icon name="arrow-bottom" size="9" />
                  </div>
                  <div
                    className={cn(styles.list, {
                      [styles.visible]: more[index],
                    })}
                  >
                    {options.map((option, optionIndex) => (
                      <div className={styles.item} key={optionIndex}>
                        {option.items.map((item, itemIndex) => (
                          <div className={styles.parameter} key={itemIndex}>
                            <div className={styles.label}>{item.title}</div>
                            {renderContent(type.options[itemIndex])}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                  <button
                    className={cn(
                      { button: index === 0 },
                      { button: index === 1 },
                      { button: index === 2 },
                      styles.button
                    )}
                  >
                    {type.button}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
