/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import { LogoutBtn } from "../LogoutBtn";
import { SearchHeader } from "../SearchHeader";
import styles from "./styles.module.css";
import user from "../../assets/user.svg";
import logo from "../../../public/logo.svg";

export function HeaderHome({ setIsSearchFocused }) {
  const [currentUrl, setCurrentUrl] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src={logo} alt="Logo" />
        <nav>
          <a
            href="/movies"
            style={{
              color:
                currentUrl === "http://localhost:5173/movies"
                  ? "var(--blue-400)"
                  : "#FFF",
            }}
          >
            Home
          </a>
          <a
            style={{
              color:
                currentUrl === "http://localhost:5173/historic"
                  ? "var(--blue-400)"
                  : "#FFF",
            }}
            href="/historic"
          >
            Historico
          </a>
        </nav>
        <div className={styles.utilsContent}>
          <SearchHeader setIsSearchFocused={setIsSearchFocused} />
          <img src={user} alt="Usuario" />
          <LogoutBtn />
        </div>
      </div>
    </header>
  );
}
