import React, { FC } from "react";
import { BadgeModel } from "../../models/badge.model";
import classNames from "classnames";
import classes from "./Badge.module.scss";
import { useHistory } from "react-router";

interface BadgeProps {
  badge: BadgeModel;
  className?: string;
  small?: boolean;
}

const Badge: FC<BadgeProps> = ({ badge, small, className }) => {
  const history = useHistory();

  return (
    <div
      className={classNames(className)}
      onClick={(event) => {
        event.preventDefault();
        history.push(`badge/${badge.id}`);
      }}
    >
      <div
        className={classNames(
          "d-flex box-shadow align-items-center",
          classes.Badge,
          { [classes.Small]: small }
        )}
      >
        <div
          className={classes.BadgeImage}
          style={{
            backgroundImage: `url(${badge.image})`,
          }}
        />

        {small ? null : (
          <div className="d-flex flex-column">
            <h5 className="ml-3">{badge.name}</h5>
            <p className="ml-3 text-black-50">{badge.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Badge;
