import React, { FC } from "react";
import classNames from "classnames";
import classes from "./Navbar.module.scss";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import Button from "../button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons/faSignOutAlt";

interface RouteConfig {
  link: string;
  label: string;
}

interface NavbarProps {
  isLoggedIn: boolean;
  setToken: (token: null) => void;
}

const Navbar: FC<NavbarProps> = ({ isLoggedIn, setToken }) => {
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
        {isLoggedIn ? (
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
        ) : null}

        <div>
          Welcome to Attrecto Academy
          {isLoggedIn ? (
            <Button
              color="secondary"
              className="ml-3"
              onClick={() => setToken(null)}
            >
              <FontAwesomeIcon icon={faSignOutAlt} />
            </Button>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
