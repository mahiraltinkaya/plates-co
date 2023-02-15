import React from "react";
import styles from "modules/global.module.scss";
import Iconify from "components/Iconify";
import { IProductItem } from "index.d";
import { campaings } from "@constants";

const PlatesCard: React.FC<IProductItem> = ({ product }) => {
  return (
    <div className={`${styles.card}`}>
      <div className={styles.card__plate}>
        <img src={product.img} alt="plate" width={180} height={180} />
        {campaings.map(
          (item, i) =>
            item.products.includes(product.code) && (
              <div key={i} className={styles.compaing}>
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
          <button className={styles.icon__button}>
            <Iconify
              icon={"ic:round-add-shopping-cart"}
              style={{ color: product.color, fontSize: 28 }}
            ></Iconify>
          </button>
        </div>
        <div>${product.price}</div>
      </div>
    </div>
  );
};

export default PlatesCard;
