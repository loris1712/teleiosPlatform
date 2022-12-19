import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import Slider from "react-slick";
import Icon from "../../../components/Icon";
import ScrollParallax from "../../../components/ScrollParallax";
import styles from "./Comment.module.sass";

const items = [
  {
    title: "Palestra",
    url: "/program2",
    image: "/images/content/plates.png",
    image2x: "/images/content/plates@2x.png",
    content: "Ottimo fisico",
  },
  {
    title: "Nutrizione",
    url: "/program",
    image: "/images/content/apple.png",
    image2x: "/images/content/apple@2x.png",
    content: "Ottima alimentazione",
  },
];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Comment = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: (
      <SlickArrow>
        <Icon name="arrow-next" size="14" />
      </SlickArrow>
    ),
    prevArrow: (
      <SlickArrow>
        <Icon name="arrow-prev" size="14" />
      </SlickArrow>
    ),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrapper}>
          <div className={styles.head}>
            <h2 className={cn("h2", styles.title)}>Trova ciò che ti muove</h2>
            <div className={styles.info}>
            Che tu sia un principiante assoluto o che tu voglia intensificare il tuo
              routine, ottieni l'esperienza completa per la tua attività fisica e il tuo benessere alimentare.
            </div>
          </div>
          <div className={styles.wrap}>
            <Slider className="comment-slider" {...settings}>
              {items.map((x, index) => (
                <ScrollParallax className={styles.slide} key={index}>
                  <Link className={cn("comment-item", styles.item)} to={x.url}>
                    <div className={styles.preview}>
                      <img
                        srcSet={`${x.image2x} 2x`}
                        src={x.image}
                        alt={x.title}
                      />
                    </div>
                    <div className={styles.subtitle}>{x.title}</div>
                    <div className={styles.content}>{x.content}</div>
                  </Link>
                </ScrollParallax>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
