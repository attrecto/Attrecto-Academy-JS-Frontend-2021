import React, { FC, useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";

import Page from "../../components/page/Page";
import Button from "../../components/button/Button";
import { UserModel } from "../../models/user.model";
import { usersService } from "../../service/users.service";
import classes from "./Users.module.scss";

const Users: FC = () => {
  const [users, setUsers] = useState<UserModel[]>([]);
  const { push } = useHistory();

  const fetchUsers = useCallback(async () => {
    const response = await usersService.getUsers();
    setUsers(response);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const goToUserPage = () => {
    push("/user");
  };

  const handleDeleteUser = async (id: string) => {
    await usersService.deleteUser(id);
    fetchUsers();
  };

  return (
    <Page title="Users">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <Button className="w-100 mb-3" onClick={goToUserPage}>
            Create User
          </Button>
        </div>
      </div>
      <div className="row">
        {users?.map((user) => {
          return (
            <div key={user.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Link
                to={`/user/${user.id}`}
                className={classNames("card", classes.UserCard)}
              >
                <img
                  className={classNames(classes.UserImage, "card-img-top")}
                  src={user.image}
                  alt={user.name}
                />
                <div className={classNames("card-body")}>
                  <h5>{user.name}</h5>
                </div>

                <Button
                  className={classes.DeleteIcon}
                  onClick={(event) => {
                    event.preventDefault();
                    handleDeleteUser(user.id.toString());
                  }}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
              </Link>
            </div>
          );
        })}
      </div>
    </Page>
  );
};

export default Users;
