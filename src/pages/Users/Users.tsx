import React, { FC, useEffect, useState } from "react";
import Page from "../../components/page/Page";
import { UserModel } from "../../models/user.model";
import { usersService } from "../../service/users.service";
import classNames from "classnames";
import classes from "./Users.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { Link } from "react-router-dom";

const Users: FC = () => {
  const [users, setUsers] = useState<UserModel[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await usersService.getUsers();
      setUsers(response);
    };

    fetchUsers();
  }, []);

  return (
    <Page title="Users">
      <div className="row">
        {users?.map((user) => {
          return (
            <div key={user.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Link
                to={`/user/${user.id}`}
                className={classNames("card", classes.UserCard)}
              >
                <img className={classNames("card-img-top")} src={user.image} />
                <div className={classNames("card-body")}>
                  <h5>{user.name}</h5>
                </div>

                <FontAwesomeIcon
                  icon={faTrash}
                  className={classes.DeleteIcon}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </Page>
  );
};

export default Users;
