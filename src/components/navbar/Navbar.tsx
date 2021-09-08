import React, { FC } from "react";
import classNames from "classnames";
import classes from "./Navbar.module.scss";

const Navbar: FC = () => {
  return (
    <nav className={classNames("navbar", [classes.Navbar])}>
      <div className="d-flex flex-grow-1">Welcome to Attrecto Academy</div>
    </nav>
  );
};

export default Navbar;
