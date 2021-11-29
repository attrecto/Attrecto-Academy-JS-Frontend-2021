import request, { Methods } from "../util/request";
import { BadgeFormValues, BadgeModel } from "../models/badge.model";
import { UserFormValues, UserModel } from "../models/user.model";

class BadgesService {
  async getBadges() {
    return request<BadgeModel[]>({
      method: Methods.GET,
      resource: "badges",
    });
  }

  async getBadge(id: string) {
    return request<BadgeModel>({
      method: Methods.GET,
      resource: `badges/${id}`,
    });
  }

  async updateBadge(id: string, data: BadgeFormValues) {
    return request<BadgeModel>({
      method: Methods.PATCH,
      data,
      resource: `badges/${id}`,
    });
  }
}

export const badgeService = new BadgesService();
