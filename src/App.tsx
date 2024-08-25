import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Links from "./components/Links/Links";
import ProfileInfo from "./components/ProfileInfo/ProfileInfo";
import AboutUser from "./components/AboutUser/Info";

function App() {
  return (
    <>
      <div className="main">
        <ProfileInfo />
        <div className="container mp">
          <Links />
          <AboutUser />
        </div>
      </div>
      <Navbar />
    </>
  );
}

export default App;
