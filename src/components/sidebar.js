import React, { useState } from "react";
// import logoImg from "../images/AMI_logo.jpg";
import "../styles/sidebar.css";

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const toggleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div
      className={`sidebar ${isHovered ? "hovered" : ""}`}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      {/* <div className="logo">
        <img src={logoImg} alt="Logo" />
      </div> */}
      <ul className="menu">
        <li className="menu-item">
          <i className="bx bx-home"></i>
          {isHovered && <span>Home</span>}
        </li>
        <li className="menu-item">
          <i className="bx bx-user"></i>
          {isHovered && <span>Profile</span>}
        </li>
        <li className="menu-item">
          <i className="bx bx-message-square"></i>
          {isHovered && <span>Messages</span>}
        </li>
        <li className="menu-item">
          <i className="bx bx-bell"></i>
          {isHovered && <span>Notifications</span>}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
