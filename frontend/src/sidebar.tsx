import React from "react";
import "./sidebar.css";
import logo from "./images/openroad_icon.png";
import poi from "./images/poi_icon.png";
import search from "./images/search_icon.png";
import saved from "./images/saved_icon.png";

function Sidebar() {
  return (
    <div style={{ backgroundColor: "#1B2040", width: "100vw", height: "100vh" }}>
      {" "}
      {/* Remove inline style once map is in place. */}
      <div className="menu">
        <div className="menu-icons">
          <div className="menu-item">
            <img src={logo} alt="Logo" draggable="false" className="logo" />{" "}
            {/* Remember to add href back to homepage*/}
          </div>
          <div className="menu-item">
            <img src={search} alt="Logo" draggable="false" className="menu-icon" />{" "}
            {/* Remember to add href back to homepage*/}
          </div>
          <div className="menu-item">
            <img src={poi} alt="Logo" draggable="false" className="menu-icon" />{" "}
            {/* Remember to add href back to homepage*/}
          </div>
          <div className="menu-item">
            <img src={saved} alt="Logo" draggable="false" className="menu-icon" />{" "}
            {/* Remember to add href back to homepage*/}
          </div>
        </div>
      </div>
      <div className="background"></div>
    </div>
  );
}

export default Sidebar;
