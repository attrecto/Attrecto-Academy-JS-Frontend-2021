import React, { FC, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { UserModel } from "../../models/user.model";
import { usersService } from "../../service/users.service";
import Page from "../../components/page/Page";

const User: FC = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const [user, setUser] = useState<UserModel>();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await usersService.getUser(id);
      setUser(response);
    };

    if (id) {
      fetchUser();
    }
  }, []);

  return (
    <Page title={user ? user.name : "User"}>
      Selected user
      <input
        onChange={(event) => {
          console.log("onChange", event);
        }}
      />
      {user?.name}
    </Page>
  );
};

export default User;
