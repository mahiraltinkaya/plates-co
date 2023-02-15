import React from "react";
import styles from "modules/CartComponent.module.scss";
import Iconify from "components/Iconify";
import { GlobalContext, useContext } from "@context/GlobalContext";
import CartTable from "./CartTable";
import useCartTotal from "hooks/useCartTotal";

const CartComponent = () => {
  const cartTotal = useCartTotal();
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
        <CartTable></CartTable>

        <div className={`${styles.container} ${styles["mt-5"]}`}>
          <div className={`${styles["grid-5"]} `}>Delivery</div>
          <div className={`${styles["grid-2"]} ${styles["text-right"]} `}></div>
          <div className={`${styles["grid-2"]} ${styles["text-right"]} `}></div>
          <div className={`${styles["grid-2"]} ${styles["text-right"]} `}>
            ${cartTotal?.delivery?.toFixed(2)}
          </div>
        </div>
        <div className={styles["divider"]}></div>
        <div className={`${styles.container}`}>
          <div className={`${styles["grid-5"]} `}>Discount</div>
          <div className={`${styles["grid-2"]} ${styles["text-right"]} `}></div>
          <div className={`${styles["grid-2"]} ${styles["text-right"]} `}></div>
          <div className={`${styles["grid-2"]} ${styles["text-right"]} `}>
            ${cartTotal?.discount?.toFixed(2)}
          </div>
        </div>
        <div className={styles["divider"]}></div>
        <div className={`${styles.container}`}>
          <div className={`${styles["grid-5"]} `}>Total Price </div>
          <div className={`${styles["grid-2"]} ${styles["text-right"]} `}></div>
          <div className={`${styles["grid-2"]} ${styles["text-right"]} `}></div>
          <div className={`${styles["grid-2"]} ${styles["text-right"]} `}>
            ${cartTotal?.total?.toFixed(2)}
          </div>
        </div>
        <div>
          <button className={styles.checkout__button}>
            Complete Checkout
            <Iconify icon={"material-symbols:arrow-right"}></Iconify>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
