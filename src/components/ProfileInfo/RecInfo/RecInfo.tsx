import Dialogue from "./Dialogue/Dialogue";
import styles from "./styles.module.css";
import { Avatar, Button } from "@mui/material";
import av1 from "../../../images/gela.png";
import av2 from "../../../images/mary.png";
import { WebApp } from "../../../constant/webapp";
const RecInfo = () => {
  return (
    <div className={`container mp ${styles.container}`}>
      <Button className={styles.linkBtn} variant="text">
        <Avatar src={av1} className={styles.circleInfo} />
        <Avatar src={av2} className={styles.circleInfo} />
        <span style={{ zIndex: 1 }} className={`${styles.circleInfo}`}>
          +7
        </span>

        <span className={styles.text}>Рекомендации</span>
      </Button>

      <Dialogue />

      <Button
        onClick={() => {
          if (WebApp) {
            WebApp.openLink("https://t.me/ExMed0");
          }
        }}
        className={styles.linkTg}
      >
        Связаться
      </Button>
    </div>
  );
};

export default RecInfo;
