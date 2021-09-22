import React, { FC } from "react";
import classNames from "classnames";
import classes from "./Navbar.module.scss";
import './Navbar.scss';
import { NavLink } from "react-router-dom";

interface RouteConfig {
  link: string;
  label: string;
}

const Navbar: FC = () => {
  const routes: RouteConfig[] = [
    {
      link: "/home",
      label: "Home",
    },
    {
      link: "/users",
      label: "Users",
    },
    {
      link: "/badges",
      label: "Badges",
    },
  ];

  return (
    <nav className={classNames("navbar", [classes.Navbar])}>
      <div className="d-flex align-items-center justify-content-between flex-grow-1">

        <div className="d-flex">
          {routes.map((route) => {
            return (
              <NavLink
                key={route.link}
                to={route.link}
                className="nav-link mr-3"
              >
                {route.label}
              </NavLink>
            );
          })}
        </div>
        Welcome to Attrecto Academy
      </div>
    </nav>
  );
};

export default Navbar;
