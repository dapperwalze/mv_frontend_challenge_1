import { Link, NavLink } from "react-router-dom";
import "./sider.scss";

export const navlinks = [
  {
    id: 1,
    name: (
      <span className="listItem">
        <i className="ri-home-7-line" />{" "}
        <span className="listItemLabel">Home</span>
      </span>
    ),
    location: "./",
  },
  {
    id: 2,
    name: (
      <span className="listItem">
        <i className="ri-rocket-line" />{" "}
        <span className="listItemLabel">Invest</span>
      </span>
    ),
    location: "invest",
  },

  {
    id: 3,
    name: (
      <span className="listItem">
        <i className="ri-user-line" />
        <span className="listItemLabel">Account</span>
      </span>
    ),
    location: "account",
  },
];

const Sider = () => {
  return (
    <aside className="aside">
      <div className="logoContainer">
        <h1 className="logo">
          <Link className="logoLink" to="./">
            MValley
          </Link>
        </h1>
      </div>
      <div className="sideNavBar">
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
    </aside>
  );
};

export default Sider;
