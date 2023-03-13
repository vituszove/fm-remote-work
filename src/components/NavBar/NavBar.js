import React, { useState } from "react";
import "./NavBar.css";
import data from "./NavBar.json";
import logo from "../../resources/logo.svg";
import MobileNavBar from "./views/MobileNavBar";

const NavListComponent = ({ data, className }) => {
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  
  const toogleSubMenu = (index) => {
    if (activeSubMenu === index) {
      setActiveSubMenu(null);
    } else {
      setActiveSubMenu(index);
    }
  };
  return (
    <div className={className}>
      {data.map((item, index) => {
        const { name, subMenu } = item;
        const showSubMenu = subMenu.length > 0;
        const isActive = index === activeSubMenu;
        return (
          <div
            key={name}
            className={`${className}-item`}
          >
            <div className={`${className}-label`} 
            onClick={() => toogleSubMenu(index)}
            
            >
              {name} {showSubMenu && <span className={`ic-arrow ${isActive ? "ic-arrow-active" : ""}`} />}
            </div>
            {showSubMenu && (
              <div className={`${className}-submenu ${isActive ? "active-submenu" : null}`}>
                {subMenu.map((el, index) => {
                  const { subName, icon } = el;
                  return (
                    <div className="nav-submenu-item" key={index}>
                      {icon && <span className={`icon-submenu ic-${icon}`} />}
                      {subName}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

const LoginRegisterButton = ({ isMobile }) => {
  return (
    <div className={`${isMobile ? "mobile-login-reg" : "login-reg"}`}>
      <button className="btn-login secondary-btn">Login</button>
      <button className="btn-reg primary-btn">Register</button>
    </div>
  );
};

const NavBar = () => {
  const { NavList } = data;
  const [showMobileNav, setShowMobileNav] = useState(false);

  const closeNavBar = () => {
    setShowMobileNav(false);
  };

  const openMobileNav = () => {
    setShowMobileNav(true);
  };

  return (
    <div className="navbar-container">
      {/* Web View */}
      <nav className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <NavListComponent data={NavList} className={"nav-list"} />
        <span className="ic-hamburger" onClick={() => openMobileNav()} />
      </nav>
      <LoginRegisterButton />

      {/* Mobile View*/}
      {showMobileNav && <div className="mask" onClick={closeNavBar}/>}
      
      <MobileNavBar
        className={`${
          showMobileNav ? "mobile-nav-container" : "hide-mobile-nav"
        }`}
        closeNavBar={closeNavBar}
      >
        
        <NavListComponent data={NavList} className={"mobile-nav"} />
        <LoginRegisterButton isMobile={true} />
      </MobileNavBar>
    </div>
  );
};

export default NavBar;
