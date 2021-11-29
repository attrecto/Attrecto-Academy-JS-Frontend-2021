import React, { FC, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { BadgeFormValues, BadgeModel } from "../../models/badge.model";
import * as Yup from "yup";
import { badgeService } from "../../service/badges.service";
import Page from "../../components/page/Page";
import { Form, Formik } from "formik";
import TextField from "../../components/text-field/TextField";
import TagField from "../../components/tag-field/TagField";
import Button from "../../components/button/Button";

const BadgePage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [badge, setBadge] = useState<BadgeModel>();
  const { replace } = useHistory();

  const initialValues: BadgeFormValues = {
    name: badge?.name || "",
    description: badge?.description || "",
    image: badge?.image || "",
  };

  const schema = Yup.object().shape({
    name: Yup.string().required(),
    image: Yup.string().required(),
    description: Yup.string().required(),
  });

  useEffect(() => {
    const fetchBadge = async () => {
      const response = await badgeService.getBadge(id);
      setBadge(response);
    };

    fetchBadge();
  }, [id]);

  const goToBadgesPage = () => {
    replace("/badges");
  };

  const handleSubmit = async (values: BadgeFormValues) => {
    if (badge?.id) {
      await badgeService.updateBadge(badge.id.toString(), values);
      goToBadgesPage();
    }
  };

  return (
    <Page title={"Badge"}>
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
              <TextField name="image" label="Image" />
              <TextField name="description" label="Description" />

              <Button
                color="secondary"
                type="button"
                onClick={goToBadgesPage}
                className="mr-2"
              >
                Back
              </Button>
              <Button type="submit" disabled={!isValid}>
                {"Update"}
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Page>
  );
};

export default BadgePage;
