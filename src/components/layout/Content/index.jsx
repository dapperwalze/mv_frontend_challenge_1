import React from "react";
import "./page-content.scss";
import { navlinks } from "./../Sider/index";
import { NavLink } from "react-router-dom";

const PageContent = ({ children }) => {
  return (
    <main className="pageContent">
      {children}
      <div className="mobileNav">
        {navlinks.map((navlink) => (
          <NavLink
            className="navLink"
            key={navlink.id}
            to={navlink.location}
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "rgba(52, 61, 72, 1)",
              background: isActive ? "#000" : "transparent",
              borderRadius: isActive ? "10px" : "",
            })}
          >
            {navlink.name}
          </NavLink>
        ))}

        <div className="logoutIcon">
          <span className="listItem">
            <i className="ri-shut-down-line" />
            <span className="listItemLabel">Log Out</span>
          </span>
        </div>
      </div>
    </main>
  );
};

export default PageContent;
