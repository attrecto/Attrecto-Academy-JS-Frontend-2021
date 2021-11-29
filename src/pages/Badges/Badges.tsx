import React, { FC, useEffect, useState } from "react";
import Page from "../../components/page/Page";
import { BadgeModel } from "../../models/badge.model";
import { badgeService } from "../../service/badges.service";
import Badge from "../../components/badge/Badge";
import classNames from "classnames";
import { Link, useHistory } from "react-router-dom";

const Badges: FC = () => {
  const [badges, setBadges] = useState<BadgeModel[]>([]);
  const history = useHistory();

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
        {badges.map((badge) => (
          <Badge
            badge={badge}
            key={badge.id}
            className={classNames("col-lg-4 col-md-6 col-sm-12 mb-3")}
          />
        ))}
      </div>
    </Page>
  );
};

export default Badges;
