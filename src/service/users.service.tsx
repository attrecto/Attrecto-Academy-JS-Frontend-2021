import request, {Methods} from "../util/request";
import {UserModel} from "../models/user.model";

class UsersService {
  async getUsers() {
    return request<UserModel[]>({
      method: Methods.GET,
      resource: "users",
    });
  }

  async getUser(id: string) {
    return request<UserModel>({
      method: Methods.GET,
      resource: `users/${id}`,
    });
  }
}

export const usersService = new UsersService();