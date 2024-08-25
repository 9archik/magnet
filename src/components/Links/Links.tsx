import { Button } from "@mui/material";
import YoutubeSVG from "../../icons/YoutubeSVG";
import TelegramSVG from "../../icons/TelegramSVG";
import { WebApp } from "../../constant/webapp";
import styles from "./styles.module.css";
const Links = () => {
  return (
    <>
      <div className="label">Ссылки</div>

      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <Button
          className={styles.link}
          onClick={() => {
            if (WebApp) {
              WebApp.openLink("https://t.me/chatgpt3");
            }
          }}
      
          variant="outlined"
        >
          <YoutubeSVG /> <span>Учу верстке</span>
        </Button>

        <Button
          className={styles.link}
          onClick={() => {
            if (WebApp) {
              WebApp.openLink("https://t.me/chatgpt3");
            }
          }}
       
          variant="outlined"
        >
          <TelegramSVG /> <span>Канал о верстке</span>
        </Button>
      </div>
    </>
  );
};

export default Links;
