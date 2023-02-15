import React, { Suspense } from "react";
import styles from "modules/global.module.scss";

import { IProduct, IMenu } from "index.d";

const PlatesCard = React.lazy(() => import("components/PlatesCard"));

const MenuRenderer: React.FC<IMenu> = ({ products }) => {
  return (
    <div className={`${styles.container} ${styles["gap-4"]} ${styles["pa-1"]}`}>
      <div className={styles["grid-12"]}></div>
      {products.map((item: IProduct, i: number) => (
        <div
          key={i}
          className={`${styles["grid-xs-12"]} ${styles["grid-sm-6"]}  ${styles["grid-md-4"]} ${styles["pa-2"]}`}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <PlatesCard product={item}></PlatesCard>
          </Suspense>
        </div>
      ))}
    </div>
  );
};

export default MenuRenderer;
