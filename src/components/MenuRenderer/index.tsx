import React from "react";
import styles from "modules/global.module.scss";
import PlatesCard from "components/PlatesCard";

import { IProduct, IMenu } from "index.d";

const MenuRenderer: React.FC<IMenu> = ({ products }) => {
  return (
    <div className={`${styles.container} ${styles["gap-4"]} ${styles["pa-1"]}`}>
      <div className={styles["grid-12"]}></div>
      {products.map((item: IProduct, i: number) => (
        <div
          key={i}
          className={`${styles["grid-xs-12"]} ${styles["grid-sm-6"]}  ${styles["grid-md-4"]} ${styles["pa-2"]}`}
        >
          <PlatesCard product={item}></PlatesCard>
        </div>
      ))}
    </div>
  );
};

export default MenuRenderer;
