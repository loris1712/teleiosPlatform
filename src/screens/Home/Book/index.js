import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Book.module.sass";
import Icon from "../../../components/Icon";
import Image from "../../../components/Image";
import ScrollParallax from "../../../components/ScrollParallax";

const items = [
  {
    title: "Pacchetto Silver",
    color: "#45B26B",
    images: "/images/content/user.svg",
    alt: "user",
    content: "€ 64",
    months: "1 mese",
    sconto: "",
  },
  {
    title: "Pacchetto Gold",
    color: "#9757D7",
    images: "/images/content/medal-1.svg",
    alt: "medal",
    content: "€ 164",
    months: "3 mesi",
    sconto: "Invece di € 192",
  },
  {
    title: "Pacchetto Platinum",
    color: "#3772FF",
    images: "/images/content/lightning.svg",
    alt: "lightning",
    content: "€ 269",
    months: "6 mesi",
    sconto: "Invece di € 384",
  },
];

const Book = () => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        {/*<div className={styles.gallery}>
          <div className={styles.preview}>
            <Image
              srcSet="/images/content/book-pic@2x.png 2x"
              srcSetDark="/images/content/book-pic-dark@2x.png 2x"
              src="/images/content/book-pic.png"
              srcDark="/images/content/book-pic-dark.png"
              alt="Book pic"
            />
          </div>
          <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            offset={300}
          >
            <img
              srcSet="/images/content/ball@2x.png 2x"
              src="/images/content/ball.png"
              alt="Ball"
            />
          </ScrollParallax>
          <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            offset={300}
          >
            <img
              srcSet="/images/content/ball-green@2x.png 2x"
              src="/images/content/ball-green.png"
              alt="Ball"
            />
          </ScrollParallax>
          <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            offset={300}
          >
            <img
              srcSet="/images/content/dumbbells@2x.png 2x"
              src="/images/content/dumbbells.png"
              alt="Dumbbells"
            />
          </ScrollParallax>
        </div>*/}
        <div className={styles.wrap}>
          <h2 className={cn("h2", styles.title)}>Diversi pacchetti</h2>
          <div className={styles.info}>
            Scegli il pacchetto che fa su misura per te
          </div>
          <div className={styles.list}>
            {items.map((x, index) => (
              <div className={styles.item} key={index}>
                <div
                  className={styles.icon}
                  style={{ backgroundColor: x.color }}
                >
                  <img src={x.images} alt={x.alt} />
                </div>
                <div className={styles.details}>
                  <div className={styles.subtitle}>{x.title}</div>
                  <div className={styles.content}>{x.months}</div>
                  <div className={styles.divFlex}>
                    <div className={styles.sconto}>{x.sconto}&nbsp;&nbsp;</div>
                    <div className={styles.price}>{x.content}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.note}>
            <strong className={styles.green}>10% di sconto </strong> se porti un tuo amico{" "}
            <strong className={styles.black}> su Teleios </strong> per comprare una scheda
          </div>
          <div className={styles.btns}>
            <Link className={cn("button", styles.button)} to="/program2">
              <span>Crea scheda</span>
              <Icon name="arrow-right" size="10" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
