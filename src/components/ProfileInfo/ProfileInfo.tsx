import ProfileMain from "./MainInfo/ProfileMain";
import RecInfo from "./RecInfo/RecInfo";
import TopProfile from "./Top/TopProfile";

const ProfileInfo = () => {
  return (
    
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <TopProfile />
      <ProfileMain />

      <RecInfo />

    </div>
  );
};

export default ProfileInfo;
