import React from "react";
import "./MobileNavBar.css";
const MobileNavBar = ({ children, className, closeNavBar }) => {
  return (
    <div className={className}>
      <div className="mobile-nav-header">
        <div className="ic-nav-close" onClick={closeNavBar} />
      </div>
      {children}
    </div>
  );
};

export default MobileNavBar;
