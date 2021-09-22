import React, { FC, useEffect, useState } from "react";
import Page from "../../components/page/Page";
import { BadgeModel } from "../../models/badge.model";
import { badgeService } from "../../service/badges.service";

const Badges: FC = () => {
  const [badges, setBadges] = useState<BadgeModel[]>([]);

  useEffect(() => {
    const fetchBadges = async () => {
      const response = await badgeService.getBadges();
      setBadges(response);
    };
  }, []);

  return <Page title="Badges">Badges</Page>;
};

export default Badges;
