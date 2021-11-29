import { UserModel } from "../../models/user.model";
import { BadgeModel } from "../../models/badge.model";
import React, { FC } from "react";
import { getDataFromTokenModel } from "../../util/token";
import { Link } from "react-router-dom";
import classNames from "classnames";
import classes from "./UserCard.module.scss";
import { AccessController } from "../access-controller/AccessController";
import Button from "../button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import Badge from "../badge/Badge";

interface UserCardProps {
  user: UserModel;
  badges: BadgeModel[];
  handleDeleteUser: (userId: string) => void;
}

const UserCard: FC<UserCardProps> = ({ user, badges, handleDeleteUser }) => {
  const role = getDataFromTokenModel("role") as Role;

  const renderUserCardContent = () => {
    return (
      <>
        <img
          className={classNames(classes.UserImage, "card-img-top")}
          src={user.image}
          alt={user.name}
        />
        <div className={classNames("card-body", classes.CardBody)}>
          <h5 className={classes.UserName}>{user.name}</h5>

          <AccessController allowedFor={"ADMIN"}>
            <Button
              className={classes.DeleteIcon}
              color="danger"
              onClick={(event) => {
                event.preventDefault();
                handleDeleteUser(user.id.toString());
              }}
            >
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </AccessController>
        </div>

        <div className={classes.Badges}>
          {user?.badges?.map((badge) => {
            const found = badges?.find((item) => item.id === badge.id);
            return found ? <Badge small badge={found} /> : null;
          })}
        </div>
      </>
    );
  };

  return role === "ADMIN" ? (
    <Link
      to={`/user/${user.id}`}
      className={classNames("card", classes.UserCard)}
    >
      {renderUserCardContent()}
    </Link>
  ) : (
    <div className={classNames("card", classes.UserCard, classes.NotLink)}>
      {renderUserCardContent()}
    </div>
  );
};

export default UserCard;
