import styles from "modules/global.module.scss";

const BannerImage = () => {
  return (
    <div className={`${styles.container} `}>
      <div className={`${styles["grid-12"]} ${styles["py-1"]}`}>
        <div className={styles.banner}>
          <img src="/images/banner.jpg" alt="Fast food banner" width={"100%"} />
        </div>
      </div>
    </div>
  );
};
export default BannerImage;
