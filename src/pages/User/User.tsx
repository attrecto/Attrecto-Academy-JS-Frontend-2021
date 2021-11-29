import React, { FC, useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { useHistory, useParams } from "react-router";
import * as Yup from "yup";

import { UserFormValues, UserModel } from "../../models/user.model";
import { BadgeModel } from "../../models/badge.model";
import { usersService } from "../../service/users.service";
import Page from "../../components/page/Page";
import TextField from "../../components/text-field/TextField";
import Button from "../../components/button/Button";
import TagField from "../../components/tag-field/TagField";
import { badgeService } from "../../service/badges.service";

const User: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { replace } = useHistory();
  const [user, setUser] = useState<UserModel>();
  const [badges, setBadges] = useState<BadgeModel[]>([]);

  const initialValues: UserFormValues = {
    name: user?.name || "",
    image: user?.image || "",
    badges: user?.badges || [],
  };

  const schema = Yup.object().shape({
    name: Yup.string().required(),
    image: Yup.string().required(),
    badges: Yup.array(),
  });

  useEffect(() => {
    const fetchUser = async () => {
      const response = await usersService.getUser(id);
      setUser(response);
    };

    if (id) {
      fetchUser();
    }
  }, [id]);

  useEffect(() => {
    const fetchBadges = async () => {
      const res = await badgeService.getBadges();
      setBadges(res);
    };
    fetchBadges();
  }, []);

  const handleSubmit = async (submittedValues: UserFormValues) => {
    if (user?.id) {
      await usersService.updateUser(user.id.toString(), submittedValues);
    } else {
      await usersService.createUser(submittedValues);
    }

    goToUsersPage();
  };

  const goToUsersPage = () => {
    replace("/users");
  };

  return (
    <Page title={user ? user.name : "User"}>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        validateOnChange
        validateOnMount
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {({ isValid }) => {
          return (
            <Form>
              <TextField name="name" label="Name" />
              <TextField name="image" label="Avatar url" />
              <TagField
                name="badges"
                label="Badges"
                options={badges}
                displayKey="name"
              />
              <Button
                color="secondary"
                type="button"
                onClick={goToUsersPage}
                className="mr-2"
              >
                Back
              </Button>
              <Button type="submit" disabled={!isValid}>
                {id ? "Update" : "Create"}
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Page>
  );
};

export default User;
