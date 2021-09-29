import React, { FC, useEffect, useState } from "react";
import Page from "../../components/page/Page";
import { BadgeModel } from "../../models/badge.model";
import { badgeService } from "../../service/badges.service";
import classNames from "classnames";
import classes from "./Badges.module.scss";

const Badges: FC = () => {
  const [badges, setBadges] = useState<BadgeModel[]>([]);

  useEffect(() => {
    const fetchBadges = async () => {
      const response = await badgeService.getBadges();
      setBadges(response);
    };
    fetchBadges();
  }, []);

  return (
    <Page title="Badges" noCard>
      <div className="row">
        {badges.map((badge) => {
          return (
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className={classNames(
                  "d-flex box-shadow align-items-center",
                  classes.Badge
                )}
              >
                <div
                  className={classes.BadgeImage}
                  style={{
                    backgroundImage: `url(${badge.image})`,
                  }}
                />

                <div className="d-flex flex-column">
                  <h5 className="ml-3">{badge.name}</h5>
                  <p className="ml-3 text-black-50">{badge.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Page>
  );
};

export default Badges;
