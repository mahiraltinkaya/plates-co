import React from "react";
import styles from "modules/global.module.scss";
import Iconify from "components/Iconify";
import { IProduct, IProductItem } from "index.d";
import { campaings } from "@constants";
import { GlobalContext, useContext } from "@context/GlobalContext";
import { dispatch } from "@store/store";
import { addItem } from "@store/reducers/cartSlice";

const PlatesCard: React.FC<IProductItem> = ({ product }) => {
  const { setCartToggle } = useContext(GlobalContext);

  const addProduct = (value: IProduct) => {
    dispatch(addItem(value));
    setCartToggle(true);
  };

  return (
    <div className={`${styles.card}`}>
      <div className={styles.card__plate}>
        <img
          src={product.img}
          alt="plate"
          width={180}
          height={180}
          loading={"lazy"}
        />
        {campaings.map(
          (item, i) =>
            item.products.includes(product.code) && (
              <div key={i} className={styles.campaign}>
                {item.describe}
              </div>
            )
        )}
      </div>
      <div className={styles.card__content}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. In amet totam
        reiciendis. Rerum corrupti est dolor consectetur, perspiciatis vero
        saepe reiciendis? Dolor adipisci excepturi nostrum?
      </div>
      <div className={styles.card__title}>{product.title}</div>
      <div className={styles.card__actions}>
        <div>
          <button
            className={styles.icon__button}
            onClick={() => {
              addProduct(product);
            }}
          >
            <Iconify
              icon={"material-symbols:add-box"}
              style={{ color: product.color, fontSize: 22 }}
            ></Iconify>
          </button>
        </div>
        <div>${product.price}</div>
      </div>
    </div>
  );
};

export default PlatesCard;
