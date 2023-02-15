import React from "react";
import styles from "modules/FooterComponent.module.scss";

const FooterComponent = () => {
  return (
    <div className={styles.footer}>
      <img src="/logo.png" alt="Plates Co. logo" width={30} /> Plates Co.
    </div>
  );
};
export default FooterComponent;
