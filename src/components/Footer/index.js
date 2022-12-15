import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import cn from "classnames";
import styles from "./Footer.module.sass";
import Subscription from "../Subscription";
import Theme from "../Theme";
import Icon from "../Icon";
import Image from "../Image";

const menu = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Chi siamo",
    url: "/features",
  },
  {
    title: "Prezzi",
    url: "/pricing",
  },
  {
    title: "Recensioni",
    url: "/class01",
  },
  {
    title: "Contattaci",
    url: "/contact",
  },
];

const socials = [
  {
    title: "facebook",
    size: "16",
    url: "https://www.facebook.com/ui8.net/",
  },
  {
    title: "instagram",
    size: "16",
    url: "https://www.instagram.com/ui8net/",
  },
  /*{
    title: "dribbble",
    size: "16",
    url: "https://dribbble.com/ui8",
  },
  {
    title: "behance",
    size: "20",
    url: "https://www.behance.net/ui8",
  },*/
];

const Footer = () => {
  const [visible, setVisible] = useState(false);

  return (
    <footer className={styles.footer}>
      <div className={styles.body}>
        <div className={cn("container", styles.container)}>
          <div className={styles.col}>
            <div className={styles.box}>
              <Link className={styles.logo} to="/">
                <Image
                  className={styles.pic}
                  src="/images/logo-dark.svg"
                  srcDark="/images/logo1.png"
                  alt="Fitness Pro"
                />
              </Link>
              <Theme className={styles.theme} />
            </div>
            <div className={cn(styles.item, { [styles.active]: visible })}>
              <div
                className={styles.category}
                onClick={() => setVisible(!visible)}
              >
                footer nav
                <Icon name="arrow-bottom" size="9" />
              </div>
              <div className={styles.menu}>
                {menu.map((x, index) => (
                  <NavLink
                    className={styles.link}
                    activeClassName={styles.active}
                    to={x.url}
                    key={index}
                  >
                    {x.title}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.category}>contatti</div>
            <div className={styles.info}>
              <p>Via Tiberio Claudio Felice, 50, 84131 Salerno SA</p>
              <p>Via Tiberio Claudio Felice, Milano, Italia</p>
              <p>+39 327 406 2756</p>
              <p>+39 330 602 145</p>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.category}>newsletter</div>
            <div className={styles.info}>
              Iscriviti alla nostra newsletter per ottenere più corsi di design
              gratuiti e risorsa.
            </div>
            <Subscription
              className={styles.subscription}
              placeholder="Inserisci la tua email"
            />
          </div>
        </div>
      </div>
      <div className={styles.foot}>
        <div className={cn("container", styles.container)}>
          <div className={styles.copyright}>
            Copyright © 2022. Tutti i diritti riservati.
          </div>
          <div className={styles.socials}>
            {socials.map((x, index) => (
              <a
                className={styles.social}
                href={x.url}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                <Icon name={x.title} size={x.size} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
