import request, { Methods } from "../util/request";
import { BadgeModel } from "../models/badge.model";

class BadgesService {
  async getBadges() {
    return request<BadgeModel[]>({
      method: Methods.GET,
      resource: "badges",
    });
  }
}

export const badgeService = new BadgesService();
