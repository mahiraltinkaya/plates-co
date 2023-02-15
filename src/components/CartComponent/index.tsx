import React from "react";
import styles from "modules/CartComponent.module.scss";
import Iconify from "components/Iconify";
import { GlobalContext, useContext } from "@context/GlobalContext";

const CartComponent = () => {
  const { setCartToggle } = useContext(GlobalContext);

  return (
    <div
      className={styles.wrapper}
      onClick={() => {
        setCartToggle(false);
      }}
    >
      <div className={styles.overlay}></div>
      <div
        className={styles.component}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div
          className={`${styles["d-flex"]} ${styles["justify-space-between"]} ${styles["align-center"]}`}
        >
          <h3 className={styles["h3"]}>Checkout</h3>
          <button
            className={styles["icon__button"]}
            onClick={() => {
              setCartToggle(false);
            }}
          >
            <Iconify icon={"prime:times"}></Iconify>
          </button>
        </div>

        <div className={styles["divider"]}></div>
      </div>
    </div>
  );
};

export default CartComponent;
