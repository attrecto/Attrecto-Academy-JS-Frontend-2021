import jwtDecode from "jwt-decode";

interface TokenModel {
  role: Role | null;
  email: string;
}

export function getDataFromTokenModel(key: keyof TokenModel) {
  try {
    const token = localStorage.getItem("auth-token");
    if (token) {
      const tokenData: TokenModel = jwtDecode(token);
      return tokenData[key];
    }
    return null;
  } catch (e) {
    return null;
  }
}
