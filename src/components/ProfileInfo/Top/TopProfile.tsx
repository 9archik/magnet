import { Avatar } from "@mui/material";
import styles from "./styles.module.css";
import { Button } from "@mui/material";
import StarSVG from "../../../icons/StarSVG";
import AvatarPNG from "../../../images/kostya.png";
const TopProfile = () => {
  return (
    <div className={`container bp ${styles.container}`}>
      <div className={styles.match}>
        <span>Мэтч</span>
        <span>85%</span>
      </div>

      <Avatar className={styles.avatar} src={AvatarPNG}  />

      <Button variant="contained">
        <StarSVG />
      </Button>
    </div>
  );
};
export default TopProfile;
