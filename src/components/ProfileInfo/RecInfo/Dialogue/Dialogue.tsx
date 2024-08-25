import { Button, Link } from "@mui/material";
import MagnetSVG from "../../../../icons/MagnetSVG";
import styles from "./styles.module.css";
const Dialogue = () => {
  return (
    <div className={styles.container}>
      <span className={styles.circle}>
        <MagnetSVG />
      </span>

      <p className={styles.dialogue}>
        У Филиппа опыт в разработке более 5 лет. У вас общий друг
        <Link>{` @funfikkk`}</Link>
        <svg
          width="16"
          height="18"
          viewBox="0 0 16 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.12988 0.500244L15.1298 14.0002C10.6299 18.0002 1.28467 17.3984 0.629911 16.5002C8.63007 13.5002 8.12988 4.00024 8.12988 0.500244Z"
            fill="#2F2F30"
          />
        </svg>
      </p>
    </div>
  );
};

export default Dialogue;
