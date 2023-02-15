import React from "react";

import styles from "modules/HeaderComponent.module.scss";
import Iconify from "components/Iconify";
import { GlobalContext, useContext } from "@context/GlobalContext";

const HeaderComponent = () => {
  const { setCartToggle } = useContext(GlobalContext);
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.header__content}>
          <div className={styles.header__logo}>
            <img src="/logo.png" alt="Plates Co. logo" width={40} />{" "}
            <h1 className={styles.h3}>Plates Co.</h1>
          </div>
          <div className={styles.header__section}>
            <nav>
              <a href="/">Products</a>
              <a href="/">Features</a>
              <a href="/">Partners</a>
            </nav>
            <button className={styles.contact__button}>Contact Us</button>
          </div>
          <div className={styles.header__section}>
            <button
              className={`${styles.icon__button} ${styles.menu}`}
              onClick={() => {
                setCartToggle(true);
              }}
            >
              <Iconify icon={"ic:outline-shopping-bag"} size={32}></Iconify>
              <span className={styles.button__badge}>3</span>
            </button>
          </div>
          <div className={styles.header__mobile}>
            <button
              className={styles.icon__button}
              onClick={() => {
                setCartToggle(true);
              }}
            >
              <Iconify icon={"ic:outline-shopping-bag"} size={32}></Iconify>
              <span className={styles.button__badge}>3</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
