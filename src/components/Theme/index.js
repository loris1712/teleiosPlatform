import React, { useState, useEffect, useCallback } from "react";
import cn from "classnames";
import styles from "./Theme.module.sass";
import useDarkMode from "use-dark-mode";
import Icon from "../Icon";

const Theme = ({ className }) => {
  const darkMode = useDarkMode(true);

  const logResult = useCallback(() => {
    return 2 + 2;
  }, []); //logResult is memoized now.

  useEffect(() => {
    function cambia() {
      let elem = document.getElementById("someRandomID");
      if (elem.checked != true) {
        elem.click();
      }
    }

    cambia();
  }, [logResult]);

  return (
    <label className={cn(styles.theme, className)}>
      <input
        className={styles.input}
        id="someRandomID"
        checked={darkMode.value}
        onChange={darkMode.toggle}
        type="checkbox"
      />
      <span className={styles.inner}>
        <span className={styles.box}></span>
        <span className={styles.icon}>
          <Icon name="moon" size="24" />
          <Icon name="sun" size="24" />
        </span>
      </span>
    </label>
  );
};

export default Theme;
