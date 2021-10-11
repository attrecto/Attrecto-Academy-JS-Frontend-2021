import { CredentialsModel } from "../models/credentials";
import request, { Methods } from "../util/request";

interface LoginResponse {
  token: string;
}

export class AuthService {
  async login(credentials: CredentialsModel) {
    return request<LoginResponse>({
      method: Methods.POST,
      resource: "login",
      data: credentials,
    });
  }
}

export const authService = new AuthService();
