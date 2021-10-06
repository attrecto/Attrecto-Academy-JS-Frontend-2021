import request, { Methods } from "../util/request";
import { UserFormValues, UserModel } from "../models/user.model";

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

  async createUser(data: UserFormValues) {
    return request<UserModel>({
      method: Methods.POST,
      data,
      resource: "users",
    });
  }

  async updateUser(id: string, data: UserFormValues) {
    return request<UserModel>({
      method: Methods.PATCH,
      data,
      resource: `users/${id}`,
    });
  }

  async deleteUser(id: string) {
    return request<UserModel>({
      method: Methods.DELETE,
      resource: `users/${id}`,
    });
  }
}

export const usersService = new UsersService();
