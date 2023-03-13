import React from "react";
import "./LandingPage.css";

import { ClientLogo } from "./views/ClientLogo";
const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="left-landing">
        <div className="left-landing-top">
          <div className="title">Make remote work</div>

          <div className="sub-content">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </div>
          <button className="primary-btn learn-btn">Learn more</button>
        </div>

        <ClientLogo />
      </div>
      <div className="hero-img"/>
    </div>
  );
};

export default LandingPage;
