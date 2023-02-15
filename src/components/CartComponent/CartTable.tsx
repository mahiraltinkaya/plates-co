import React from "react";
import styles from "modules/CartComponent.module.scss";
import { useAppSelector } from "@store/store";
import Iconify from "components/Iconify";
import { dispatch } from "@store/store";
import { deleteItem } from "@store/reducers/cartSlice";

const CartTable = () => {
  const cart = useAppSelector((state) => state.cart.cart);
  return (
    <>
      {cart.length > 0 &&
        cart.map((item, i) => {
          return (
            <div key={i}>
              <div className={`${styles.container}  ${styles["my-1"]}`}>
                <div className={`${styles["grid-1"]}`}>
                  <button
                    className={styles.icon__button}
                    onClick={() => {
                      dispatch(deleteItem(item));
                    }}
                  >
                    <Iconify icon="clarity:times-line" size={18}></Iconify>
                  </button>
                </div>
                <div className={`${styles["grid-4"]} ${styles["py-1"]}`}>
                  {item.title}
                </div>
                <div
                  className={`${styles["grid-2"]} ${styles["text-right"]} ${styles["py-1"]}`}
                >
                  ${item.price}
                </div>
                <div
                  className={`${styles["grid-2"]} ${styles["text-right"]} ${styles["py-1"]}`}
                >
                  {item.qty} p.
                </div>
                <div
                  className={`${styles["grid-2"]} ${styles["text-right"]} ${styles["py-1"]}`}
                >
                  ${(item.price * item.qty).toFixed(2)}
                </div>
              </div>
              <div
                className={styles["divider"]}
                style={{
                  borderColor: item.color,
                  borderWidth: "0.1px !important",
                }}
              ></div>
            </div>
          );
        })}

      {cart.length === 0 && (
        <div
          className={`${styles["d-flex"]} ${styles["justify-center"]} ${styles["h3"]} ${styles["mt-2"]}`}
        >
          ... Your cart is empty
        </div>
      )}
    </>
  );
};

export default React.memo(CartTable);
