import React, { useState, useEffect } from "react";
import cn from "classnames";
import styles from "./Item.module.sass";
import Icon from "../../../../components/Icon";
import ScrollParallax from "../../../../components/ScrollParallax";

const Item = ({ item }) => {
  const [visible, setVisible] = useState(false);

  return (
    <ScrollParallax className={styles.item}>
      <div
        className={cn(styles.head, { [styles.active]: visible })}
        onClick={() => setVisible(!visible)}
      >
        <div className={styles.title}>{item.title}</div>
        <div className={styles.arrow}>
          <Icon name="arrow-bottom" size="10" />
        </div>
      </div>
      <div className={cn(styles.body, { [styles.visible]: visible })}>
        <div className={styles.row}>
          <div>
            <div className={styles.content}>
              <p>
              {item.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </ScrollParallax>
  );
};

export default Item;
