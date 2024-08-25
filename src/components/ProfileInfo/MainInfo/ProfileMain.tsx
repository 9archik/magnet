import styles from "./styles.module.css";
const ProfileMain = () => {
  return (
    <div className={`container bp ${styles.container}`}>
      <div className={styles.name}>Филипп Константинопольский</div>
      <div className={styles.job}>Frontend developer</div>
    </div>
  );
};

export default ProfileMain;
