/* eslint-disable react/prop-types */
import styles from "./styles.module.css";
import { useState } from "react";
import lupa from "../../assets/lupa.png";

export function SearchHeader({ setIsSearchFocused }) {
  const [isFocused, setIsFocused] = useState(false);

  const buttonClass = isFocused ? styles.full : styles.small;

  return (
    <div
      className={`${styles.lupaContent} ${buttonClass} `}
      onBlur={() => {
        setIsFocused(false);
        setIsSearchFocused(false);
      }}
      onFocus={() => {
        setIsFocused(true);
        setIsSearchFocused(true);
      }}
    >
      <input type="text" className={`${buttonClass}`} />
      <img className={styles.lupa} src={lupa} alt="lupa" />
    </div>
  );
}
