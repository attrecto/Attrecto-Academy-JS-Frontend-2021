import React, {FC, useCallback, useEffect, useState} from "react";
import {useHistory} from "react-router";

import Page from "../../components/page/Page";
import Button from "../../components/button/Button";
import {UserModel} from "../../models/user.model";
import {usersService} from "../../service/users.service";
import {BadgeModel} from "../../models/badge.model";
import {badgeService} from "../../service/badges.service";
import {AccessController} from "../../components/access-controller/AccessController";
import UserCard from "../../components/user-card/UserCard";

const Users: FC = () => {
  const [users, setUsers] = useState<UserModel[]>([]);
  const [badges, setBadges] = useState<BadgeModel[]>([]);
  const { push } = useHistory();

  const fetchUsers = useCallback(async () => {
    const response = await usersService.getUsers();
    setUsers(response);
  }, []);

  const fetchBadges = useCallback(async () => {
    const response = await badgeService.getBadges();
    setBadges(response);
  }, []);

  useEffect(() => {
    fetchUsers();
    fetchBadges();
  }, [fetchUsers, fetchBadges]);

  const goToUserPage = () => {
    push("/user");
  };

  const handleDeleteUser = async (id: string) => {
    await usersService.deleteUser(id);
    fetchUsers();
  };

  return (
    <Page title="Users">
      <AccessController allowedFor={"ADMIN"}>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <Button className="w-100 mb-3" onClick={goToUserPage}>
              Create User
            </Button>
          </div>
        </div>
      </AccessController>

      <div className="row">
        {users?.map((user) => {
          return (
            <div key={user.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <UserCard
                user={user}
                badges={badges}
                handleDeleteUser={handleDeleteUser}
              />
            </div>
          );
        })}
      </div>
    </Page>
  );
};

export default Users;
