import React from "react";
import cn from "classnames";
import Slider from "react-slick";
import Icon from "../Icon";
import styles from "./Review.module.sass";

const items = [
  {
    logo: "./images/content/attestati/giovanni1.jpg",
  },
  {
    logo: "./images/content/attestati/roberto1.jpg",
  },
  {
    logo: "./images/content/attestati/roberto2.jpg",
  },
  {
    logo: "./images/content/attestati/roberto3.jpg",
  },
  {
    logo: "./images/content/attestati/roberto4.jpg",
  },
  {
    logo: "./images/content/attestati/roberto5.jpg",
  },
];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Review = ({ className }) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
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
  };

  return (
    <div className={cn(className, styles.section)}>
      <div className={cn("container", styles.container)}>
      <h2 className={cn("h2", styles.title)}>Attestati</h2>
        <div className={styles.wrap}>
          <Slider className="review-slider" {...settings}>
            {items.map((x, index) => (
              <div className={styles.slide} key={index}>
                <div className={cn("review-item", styles.item)}>
                  <div className={styles.logo}>
                    <img src={x.logo} alt="Logo" height="500px" />
                  </div>
                  <div className={styles.title}>{x.comment}</div>
                  <div className={styles.author}>{x.author}</div>
                  <div className={styles.position}>{x.position}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Review;
