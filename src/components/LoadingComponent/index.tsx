import React from "react";
import Iconify from "components/Iconify";
import styles from "modules/LoadingComponent.module.scss";

const LoadingComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles["grid-12"]}>
        <div className={styles.loader}>
          <Iconify icon={"eos-icons:three-dots-loading"} size={64}></Iconify>
        </div>
      </div>
    </div>
  );
};

export default LoadingComponent;
