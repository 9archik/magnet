import ListSVG from "../../icons/ListSVG";
import ProfileSVG from "../../icons/ProfileSVG";
import SearchSVG from "../../icons/SearchSVG";
import StarSVG from "../../icons/StarSVG";
import styles from "./styles.module.css";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { WebApp } from "../../constant/webapp";

const GradientSVG = () => {
  return (
    <svg
      className={styles.gradient}
      xmlns="http://www.w3.org/2000/svg"
      width="65"
      height="64"
      viewBox="0 0 65 64"
      fill="none"
    >
      <g filter="url(#filter0_f_35_444)">
        <circle cx="32.5" cy="33" r="23" fill="#C5142B" fill-opacity="0.6" />
      </g>
      <defs>
        <filter
          id="filter0_f_35_444"
          x="-2.5"
          y="-2"
          width="70"
          height="70"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="6"
            result="effect1_foregroundBlur_35_444"
          />
        </filter>
      </defs>
    </svg>
  );
};

const BoltSVG = () => {
  return (
    <svg
      className={styles.bolt}
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="34"
      viewBox="0 0 35 34"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.5 3.06061C23.2739 3.06061 27.9545 7.74127 27.9545 13.5152V20.4849C27.9545 26.2587 23.2739 30.9394 17.5 30.9394C11.7261 30.9394 7.04545 26.2587 7.04545 20.4849V13.5152C7.04545 7.74127 11.7261 3.06061 17.5 3.06061ZM16.4212 14.8197V6.85501C16.4212 5.9998 17.5803 5.73614 17.9499 6.50781L24.0267 19.1877H18.5968V27.1576C18.5968 28.0128 17.4388 28.2765 17.0686 27.5058L10.9741 14.8197H16.4212Z"
        fill="white"
      />
    </svg>
  );
};

const Navbar = () => {
  return (
    <BottomNavigation
      className={`${styles.navbar} ${WebApp.platform === "ios" && styles.ios}`}
      showLabels
    >
      <BottomNavigationAction
        label="Профиль"
        icon={
          <div
            style={{ height: 24, display: "flex", justifyContent: "center" }}
          >
            <ProfileSVG />
          </div>
        }
      />
      <BottomNavigationAction
        label="Поиск"
        icon={
          <div
            style={{
              height: 24,
              display: "flex",
              justifyContent: "center",
              transform: "translateY(2px)",
            }}
          >
            <SearchSVG />
          </div>
        }
      />
      <button className={styles.magnet}>
        <GradientSVG />
        <BoltSVG />
      </button>
      <BottomNavigationAction
        label="Объявления"
        icon={
          <div
            style={{
              height: 24,
              display: "flex",
              justifyContent: "center",
              transform: "translateY(2px)",
            }}
          >
            <ListSVG />
          </div>
        }
      />
      <BottomNavigationAction
        label="Избранное"
        icon={
          <div
            style={{ height: 24, display: "flex", justifyContent: "center" }}
          >
            <StarSVG />
          </div>
        }
      />
    </BottomNavigation>
  );
};

export default Navbar;
